'use strict';

import * as Parser from '../parser/jsonParser';
import { MinecraftDocumentType, getMinecraftDocumentType } from './minecraftUtils';

export class MinecraftSchemas {
	public getMinecraftSchemaId(document: Parser.JSONDocument): string | null {
		switch (getMinecraftDocumentType(document)) {
			case MinecraftDocumentType.ServerEntity:
				return "https://minecraft-addon-tools.github.io/schemas/1.8.0/serverEntity.json";
		}
		return null;
	}
}