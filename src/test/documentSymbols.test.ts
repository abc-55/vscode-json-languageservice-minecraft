/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

import * as assert from 'assert';
import * as JsonSchema from '../jsonSchema';

import { SymbolInformation, SymbolKind, TextDocument, Range, Position, TextEdit, DocumentSymbol } from 'vscode-languageserver-types';
import { Thenable, Color, getLanguageService } from "../jsonLanguageService";
import { colorFrom256RGB } from '../utils/colors';
import { ClientCapabilities } from '../jsonLanguageTypes';

suite('JSON Document Symbols', () => {

	let schemaRequestService = function (uri: string): Promise<string> {
		return Promise.reject<string>('Resource not found');
	};

	function getFlatOutline(value: string): SymbolInformation[] {
		let uri = 'test://test.json';
		let ls = getLanguageService({ schemaRequestService, clientCapabilities: ClientCapabilities.LATEST });

		let document = TextDocument.create(uri, 'json', 0, value);
		let jsonDoc = ls.parseJSONDocument(document);
		return ls.findDocumentSymbols(document, jsonDoc);
	}

	function getHierarchicalOutline(value: string): DocumentSymbol[] {
		let uri = 'test://test.json';
		let ls = getLanguageService({ schemaRequestService, clientCapabilities: ClientCapabilities.LATEST });

		let document = TextDocument.create(uri, 'json', 0, value);
		let jsonDoc = ls.parseJSONDocument(document);
		return ls.findDocumentSymbols2(document, jsonDoc);
	}

	function assertColors(value: string, schema: JsonSchema.JSONSchema, expectedOffsets: number[], expectedColors: Color[]): Thenable<any> {
		let uri = 'test://test.json';
		let schemaUri = "http://myschemastore/test1";

		let ls = getLanguageService({ schemaRequestService, clientCapabilities: ClientCapabilities.LATEST });
		ls.configure({ schemas: [{ fileMatch: ["*.json"], uri: schemaUri, schema }] });

		let document = TextDocument.create(uri, 'json', 0, value);
		let jsonDoc = ls.parseJSONDocument(document);
		return ls.findDocumentColors(document, jsonDoc).then(colorInfos => {
			let actualOffsets = colorInfos.map(r => document.offsetAt(r.range.start));
			assert.deepEqual(actualOffsets, expectedOffsets);
			let actualColors = colorInfos.map(r => r.color);
			assert.deepEqual(actualColors, expectedColors);
		});
	}

	function assertColorPresentations(color: Color, ...expected: string[]) {
		let ls = getLanguageService({ schemaRequestService, clientCapabilities: ClientCapabilities.LATEST });

		let document = TextDocument.create('test://test/test.css', 'css', 0, '');

		let doc = ls.parseJSONDocument(document);
		let range = Range.create(Position.create(0, 0), Position.create(0, 1));
		let result = ls.getColorPresentations(document, doc, color, range);
		assert.deepEqual(result.map(r => r.label), expected);
		assert.deepEqual(result.map(r => r.textEdit), expected.map(l => TextEdit.replace(range, JSON.stringify(l))));
	}

	function assertOutline(value: string, expected: any[], message?: string) {
		let actual = getFlatOutline(value);

		assert.equal(actual.length, expected.length, message);
		for (let i = 0; i < expected.length; i++) {
			assert.equal(actual[i].name, expected[i].label, message);
			assert.equal(actual[i].kind, expected[i].kind, message);
		}
	}
	interface ExpectedDocumentSymbol {
		label: string;
		kind: SymbolKind;
		children: ExpectedDocumentSymbol[];
	}

	function assertHierarchicalOutline(value: string, expected: ExpectedDocumentSymbol[], message?: string) {
		function assertDocumentSymbols(actuals: DocumentSymbol[], expected: ExpectedDocumentSymbol[]) {
			assert.equal(actuals.length, expected.length, message);
			for (let i = 0; i < expected.length; i++) {
				assert.equal(actuals[i].name, expected[i].label, message);
				assert.equal(actuals[i].kind, expected[i].kind, message);
				assertDocumentSymbols(actuals[i].children, expected[i].children);
			}
		}
		let actual = getHierarchicalOutline(value);
		assertDocumentSymbols(actual, expected);


		assert.equal(actual.length, expected.length, message);
		for (let i = 0; i < expected.length; i++) {
			assert.equal(actual[i].name, expected[i].label, message);
			assert.equal(actual[i].kind, expected[i].kind, message);
			assert.equal(actual[i].kind, expected[i].kind, message);
		}
	}


	test('Outline - Base types', function () {
		let content = '{ "key1": 1, "key2": "foo", "key3" : true }';

		let expected = [
			{ label: 'key1', kind: SymbolKind.Number },
			{ label: 'key2', kind: SymbolKind.String },
			{ label: 'key3', kind: SymbolKind.Boolean },
		];

		assertOutline(content, expected);
	});

	test('Outline - Arrays', function () {
		let content = '{ "key1": 1, "key2": [ 1, 2, 3 ], "key3" : [ { "k1": 1 }, {"k2": 2 } ] }';

		let expected = [
			{ label: 'key1', kind: SymbolKind.Number },
			{ label: 'key2', kind: SymbolKind.Array },
			{ label: 'key3', kind: SymbolKind.Array },
			{ label: 'k1', kind: SymbolKind.Number },
			{ label: 'k2', kind: SymbolKind.Number }
		];

		assertOutline(content, expected);
	});

	test('Outline - Objects', function () {
		let content = '{ "key1": { "key2": true }, "key3" : { "k1":  { } }';

		let expected = [
			{ label: 'key1', kind: SymbolKind.Module },
			{ label: 'key2', kind: SymbolKind.Boolean },
			{ label: 'key3', kind: SymbolKind.Module },
			{ label: 'k1', kind: SymbolKind.Module }
		];

		assertOutline(content, expected);
	});

	test('Outline - object with syntax error', function () {
		let content = '{ "key1": { "key2": true, "key3":, "key4": false } }';

		let expected = [
			{ label: 'key1', kind: SymbolKind.Module },
			{ label: 'key2', kind: SymbolKind.Boolean },
			{ label: 'key4', kind: SymbolKind.Boolean },
		];

		assertOutline(content, expected);
	});


	test('Outline - empty name', function () {
		let content = '{ "": 1, " ": 2 }';

		let expected = [
			{ label: '""', kind: SymbolKind.Number },
			{ label: '" "', kind: SymbolKind.Number }
		];

		assertOutline(content, expected);

		let expected2: ExpectedDocumentSymbol[] = [
			{ label: '""', kind: SymbolKind.Number, children: [] },
			{ label: '" "', kind: SymbolKind.Number, children: [] }
		];

		assertHierarchicalOutline(content, expected2);
	});

	test('Hierarchical Outline - Object', function () {
		let content = '{ "key1": { "key2": true }, "key3" : { "k1":  { } }';

		let expected: ExpectedDocumentSymbol[] = [
			{ label: 'key1', kind: SymbolKind.Module, children: [{ label: 'key2', kind: SymbolKind.Boolean, children: [] }] },
			{ label: 'key3', kind: SymbolKind.Module, children: [{ label: 'k1', kind: SymbolKind.Module, children: [] }] }
		];

		assertHierarchicalOutline(content, expected);
	});

	test('Hierarchical Outline - Array', function () {
		let content = '{ "key1": [ { "key2": true }, { "k1": [] } ]';

		let expected: ExpectedDocumentSymbol[] = [
			{
				label: 'key1', kind: SymbolKind.Array, children: [
					{ label: '0', kind: SymbolKind.Module, children: [{ label: 'key2', kind: SymbolKind.Boolean, children: [] }] },
					{ label: '1', kind: SymbolKind.Module, children: [{ label: 'k1', kind: SymbolKind.Array, children: [] }] }]
			}
		];

		assertHierarchicalOutline(content, expected);
	});

	test('Colors', async function () {
		let content = '{ "a": "#FF00FF", "b": "#FF0000" }';
		let schema: JsonSchema.JSONSchema = {
			type: 'object',
			description: 'a very special object',
			properties: {
				'a': {
					type: 'number',
					description: 'A',
					format: 'color'
				},
				'b': {
					type: 'string',
					description: 'B',
					format: 'color'
				}
			}
		};

		let expectedOffsets = [7, 23];
		let expectedColors = [colorFrom256RGB(255, 0, 255), colorFrom256RGB(255, 0, 0)];
		return assertColors(content, schema, expectedOffsets, expectedColors);
	});

	test('color presentations', function () {
		assertColorPresentations(colorFrom256RGB(255, 0, 0), '#ff0000');
		assertColorPresentations(colorFrom256RGB(77, 33, 111, 0.5), '#4d216f80');
	});

});