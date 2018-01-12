export function mergeImports(prev: Module.Import.Source, next: Module.Import.Source) {
	if(prev.variable !== next.variable) {
		throw new Error('Parser error: The name of the variables must be the same for the same import')
	}
	return {
		type: 'import',
		variable: prev.variable,
		variables: mergeArray(prev.variables, next.variables),
		path: prev.path
	}
}

export function mergeArray(prev: string[], next: string[]) {
	if(!prev) {
		return next
	} else if(!next) {
		return prev
	}

	let arr = prev.concat(next)

	for(let i=0; i<arr.length; ++i) {
		for(let j=i+1; j<arr.length; ++j) {
			if(arr[i] === arr[j])
				arr.splice(j--, 1);
		}
	}

	return arr;
}