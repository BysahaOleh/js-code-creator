import {js} from 'js-beautify'
import {mapField, mapImports} from '../helpers/parser'

export default function(fileObject: Module.Template.InitSource) {
	let file = {
		imports: mapImports(fileObject.imports).join(''),
		top: mapField(fileObject.top).join(''),
		center: mapField(fileObject.center).join(''),
		bottom: mapField(fileObject.bottom).join('')
	}

	return js(file.imports + file.top + file.center + file.bottom, {
		indent_size: 2,
		e4x: true
	})
}
