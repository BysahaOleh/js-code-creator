export const createVar = createVariable.bind(null, 'var')
export const createLet = createVariable.bind(null, 'let')
export const createConst = createVariable.bind(null, 'const')

function createVariable(type: Module.Variable,
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
