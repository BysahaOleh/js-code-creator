import {functionParse} from "../parser/function"
import {importParser} from "../parser/import"
import {variableParser} from "../parser/variable"

export function mapImports(imports) {
	return Object.keys(imports).map((key) => {
		return importParser(imports[key])
	})
}

export function mapField(field: Module.SourcesType[]): string[] {
	return field.map((dependence) => {
		switch(dependence.type) {
			case 'function':
			case 'arrow':
			case 'anonymous':
			case 'anonymous-arrow':
			case 'run-function':
				return functionParse(dependence)
			case 'var':
			case 'let':
			case 'const':
				return variableParser(dependence)
		}
	})
}