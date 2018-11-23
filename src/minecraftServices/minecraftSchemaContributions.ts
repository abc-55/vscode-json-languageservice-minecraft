'use strict';

import { ISchemaContributions } from '../services/jsonSchemaService';

import serverEntitySchema from "./schemas/serverEntity";

export const minecraftSchemaContributions: ISchemaContributions = {
	schemas: {
		'https://minecraft-addon-tools.github.io/schemas/1.8.0/serverEntity.json': serverEntitySchema
	}
};
