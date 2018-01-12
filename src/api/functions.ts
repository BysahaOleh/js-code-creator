function generateFunction(type: Module.Function.Type,
												storage: Module.Template.Storage,
												field: Module.Field,
												name: string,
												params: string | string[]): Module.Function.API {
	return new FunctionAPI(storage, field, {
		type,
		name,
		params
	})
}

function generateAnonymous(type: Module.Function.Type,
													 storage: Module.Template.Storage,
													 field: Module.Field,
													 params: string | string[]): Module.Function.API {
	return new FunctionAPI(storage, field, {
		type,
		params
	})
}

function FunctionAPI(storage: Module.Template.Storage,
										 field: Module.Field,
										 config: Module.Function.Source) {
	let id = storage.push(field, config)

	this.addSource = (source: Module.SourcesType) => {
		const state = storage.getById(field, id) as Module.Function.Source

		state.source ? state.source.push(source) : state.source = [source]
		return storage.changeById(field, id, state)
	}
}

export const createFunction = generateFunction.bind(null,'function')
export const createAnonymousFunction = generateAnonymous.bind(null,'anonymous')
export const createArrowFunction = generateFunction.bind(null,'arrow')
export const createAnonymousArrowFunction = generateAnonymous.bind(null,'anonymous-arrow')

export function createFunctionRun(storage: Module.Template.Storage,
																	field: Module.Field,
																	name: string,
																	params?: string | string[]): number {
	return storage.push(field, {
		type: 'run-function',
		name,
		params
	})
}

