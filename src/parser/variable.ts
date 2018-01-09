export function variableParser(source: Module.Variable.Source) {
	return `${source.type} ${source.name} = ${source.value};`
}