import {isArray} from 'lodash'

export function functionParse({type, params, source, name}: Module.Function.Source) {
	let parameters = params ? isArray(params) ? params.join(', ') : params : ''
	let body = source ? '' : '' //ToDo: Run parser

	switch(type) {
		case Module.Function.Type.function:
			return `function ${name} (${parameters}) {${body}}`

		case Module.Function.Type.anonymous:
			return `function (${parameters}) {${body}}`

		case Module.Function.Type.arrow:
			return `${name}(${parameters}) => {${body}}`

		case Module.Function.Type.anonymousArrow:
			return `(${parameters}) => (${body})`
	}
}