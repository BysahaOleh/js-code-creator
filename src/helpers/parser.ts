import {functionParse} from "../parser/function"
import {importParser} from "../parser/import"
import {variableParser} from "../parser/variable"

export function mapImports(imports) {
	return Object.keys(imports).map((key) => {
		return importParser(imports[key])
	})
}

export function mapField(field: Module.SourcesType[]) {
	return field.map((dependence) => {
		switch(dependence.type) {
			case Module.Function.Type.function:
			case Module.Function.Type.arrow:
			case Module.Function.Type.anonymous:
			case Module.Function.Type.anonymousArrow:
				return functionParse(dependence)
			case Module.Variable.Type.var:
			case Module.Variable.Type.let:
			case Module.Variable.Type.const:
				return variableParser(dependence)
		}
	})
}