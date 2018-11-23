'use strict';

import { JSONSchema } from "../jsonSchema";

export interface JSONSchemaMinecraft extends JSONSchema {
	minecraftType?: string;
}