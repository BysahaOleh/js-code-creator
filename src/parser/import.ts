export function importParser({type, variables, variable, path}: Module.Import.Source) {
	switch (type) {
		case Module.Import.Type.import:
			const addition = variables.length ? `, {${variables.join(',')}}` : ''
			return `import ${variable}${addition} from '${path};'`
		case Module.Import.Type.require:
			return `const ${variable} = require('${path}');`
	}
}