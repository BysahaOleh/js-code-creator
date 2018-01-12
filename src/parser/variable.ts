export function variableParser(source: Module.Variable.Source): string {
	return `${source.type} ${source.name} = ${source.value};`
}