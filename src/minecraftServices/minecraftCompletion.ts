'use strict';

import * as Parser from '../parser/jsonParser';
import { MinecraftDocumentType, getMinecraftDocumentType } from './minecraftUtils';
import { CompletionsCollector } from '../jsonLanguageTypes';
import { CompletionItemKind, InsertTextFormat } from 'vscode-languageserver-types';
import { JSONSchemaMinecraft } from './jsonSchemaMinecraft';
import * as ServerEntity from './serverEntity';

export class MinecraftCompletion {

	public addMinecraftValueCompletions(document: Parser.JSONDocument, schema: JSONSchemaMinecraft, separatorAfter: string, collector: CompletionsCollector) {
		if (schema.minecraftType) {
			switch (getMinecraftDocumentType(document)) {
				case MinecraftDocumentType.ServerEntity: {
					if (schema.minecraftType === "componentGroupName") {
						ServerEntity.getComponentGroups(document).forEach(x => this.addStringValueCompletion(x, separatorAfter, collector));
					}
				}
			}
		}
	}


	private addStringValueCompletion(value: string, separatorAfter: string, collector: CompletionsCollector) {
		collector.add({
			kind: CompletionItemKind.Value,
			label: JSON.stringify(value),
			insertText: JSON.stringify(value) + separatorAfter,
			insertTextFormat: InsertTextFormat.PlainText
		});
	}
}
