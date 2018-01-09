import {mergeImports} from '../helpers/merge'

export default function Storage(path: string, name: string) {
	const template = {
		path,
		name,
		imports: {},
		top: [],
		center: [],
		bottom: []
	}

	this.getStore = () => {
		return Object.assign({}, template)
	}

	this.push = (type: Module.Field, source: Module.SourcesType) => {
		return template[type].push(source) - 1
	}

	this.pushImport = (source: Module.Import.Source) => {
		if(template.imports[source.path]) {
			template.imports[source.path] = mergeImports(template.imports[source.path], source)
		} else {
			template.imports[source.path] = source
		}

		return source.path
	}

	this.changeById = (type: Module.Field, index: number, source: Module.SourcesType): boolean => {
		if(template[type][index]) {
			template[type][index] = source
			return true
		}
		return false
	}

	this.getById = (type: Module.Field, index: number): Module.SourcesType => {
		if(template[type][index]) {
			return template[type][index]
		}
		return null
	}
}
