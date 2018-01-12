export function functionParse({type, params, source, name}: Module.Function.Source): string {
	let parameters = params ? typeof params !== 'string' ? params.join(', ') : params : ''
	let body = source ? '' : '' //ToDo: Run parser

	switch(type) {
		case 'function':
			return `function ${name}(${parameters}) {${body}}`

		case 'anonymous':
			return `function (${parameters}) {${body}}`

		case 'arrow':
			return `const ${name} = (${parameters}) => {${body}}`

		case 'anonymous-arrow':
			return `(${parameters}) => {${body}}`

		case 'run-function':
			return `${name}(${parameters});` //ToDo: Create functionality for use few call
	}
}