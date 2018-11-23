'use strict';

import * as Strings from '../utils/strings';
import * as Parser from '../parser/jsonParser';

export function getMinecraftDocumentType(document: Parser.JSONDocument): MinecraftDocumentType | string | null {
	if (document && document.root && document.root.type === 'object') {
		const properties = document.root.properties.filter(
			p => Strings.startsWith(p.keyNode.value, "minecraft:") && p.valueNode && p.valueNode.type === "object");
		if (properties.length === 1) {
			const type = properties[0].keyNode.value.substring("minecraft:".length);
			return type;
		}
	}
	return null;
}


export enum MinecraftDocumentType {
	ServerEntity = "entity"
}