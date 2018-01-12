const bf = require('js-beautify')
import {mapField, mapImports} from '../helpers/parser'

export default function(fileObject: Module.Template.Storage) {
	const store = fileObject.getStore()

	let file = {
		imports: mapImports(store.imports).join(''),
		top: mapField(store.top).join(''),
		center: mapField(store.center).join(''),
		bottom: mapField(store.bottom).join('')
	}

	return bf.js_beautify(file.imports + file.top + file.center + file.bottom, {
		indent_size: 2,
		e4x: true
	})
}
