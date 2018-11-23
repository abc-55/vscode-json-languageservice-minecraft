'use strict';

import * as Parser from '../parser/jsonParser';
import { findNodeAtLocation } from 'jsonc-parser';
import { ASTNode } from '../jsonLanguageTypes';

export function getComponentGroups(document: Parser.JSONDocument): string[] {
	const node = <ASTNode>findNodeAtLocation(document.root, ["minecraft:entity", "component_groups"]);
	if (node && node.type === "object") {
		return node.properties.map(p => p.keyNode.value);
	}
	return [];
}
