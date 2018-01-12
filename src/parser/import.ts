export function importParser({type, variables, variable, path}: Module.Import.Source): string {
	switch (type) {
		case 'import':
			const separator = variable && (variables && variables.length) ? ', ' : ''
			const addition = variables ? variables.length ? `{${variables.join(',')}}` : '' : ''
			return `import ${variable ? variable : ''}${separator}${addition} from '${path}';`
		case 'require':
			return `const ${variable ? variable : ''} = require('${path}');`
	}
}