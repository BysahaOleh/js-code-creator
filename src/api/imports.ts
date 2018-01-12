import {isArray} from "lodash"

type Variables = string | string[]

export function createImport(
	storage: Module.Template.Storage,
	path: string,
	variable: Variables,
	variable2?: Variables
): Module.Import.Source {
	const config = {
		type: 'import' as Module.Import.Type,
		path
	}

	if(isArray(variable)) {
		config['variables'] = variable
	} else {
		config['variable'] = variable
	}

	if(variable2) {
		if(isArray(variable2)) {
			config['variables'] = variable2
		} else {
			config['variable'] = variable2
		}
	}

	storage.pushImport(config)

	return config
}

export function createRequire(storage: Module.Template.Storage, path: string, variable?: string): Module.Import.Source {
	const config = {
		type: 'require' as Module.Import.Type,
		path
	}

	if(variable) {
		config['variable'] = variable
	}
	storage.pushImport(config)

	return config
}