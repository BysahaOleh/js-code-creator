export let createVar = createVariable.bind(null, 'var')
export let createLet = createVariable.bind(null, 'let')
export let createConst = createVariable.bind(null, 'const')

function createVariable(type: Module.Variable.Type,
												storage: Module.Template.Storage,
												field: Module.Field,
												name: string,
												value: string) {
	storage.push(field, {
		type,
		name,
		value
	})

	return false
}
