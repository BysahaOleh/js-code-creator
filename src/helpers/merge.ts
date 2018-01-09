export function mergeImports(prev: Module.Import.Source, next: Module.Import.Source) {
	if(prev.variable !== next.variable) {
		throw Error('Parser error: The name of the variables must be the same for the same import')
	}
	return {
		type: Module.Import.Type.import,
		variable: prev.variable,
		variables: mergeArray(prev.variables, next.variables)
	}
}

export function mergeArray(prev: string[], next: string[]) {
	let arr = prev.concat(next)
	for(let i=0; i<arr.length; ++i) {
		for(let j=i+1; j<arr.length; ++j) {
			if(arr[i] === arr[j])
				arr.splice(j--, 1);
		}
	}

	return arr;
}