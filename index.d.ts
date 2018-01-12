declare namespace Module {
	type Field = 'top' | 'center' | 'bottom'

	type WrapperSourceType = {}
	type SourcesType = Import.Source | Wrapper.Source | Variable.Source | Function.Source

	namespace Template {

		interface InitSource {
			imports: {}
			top: Module.SourcesType[]
			center: Module.SourcesType[]
			bottom: Module.SourcesType[],
			path: string,
			name: string
		}

		interface Source {
			imports: object
			top: object
			center: object
			bottom: object
		}

		interface Storage {
			getStore(): InitSource
			push(type: Module.Field, source: Module.SourcesType): number
			pushImport(source: Module.Import.Source): number
			changeById(type: Module.Field, index: number, source: Module.SourcesType): boolean
			getById(type: Module.Field, index: number): Module.SourcesType
		}
	}

	namespace CreateObjectFile {
		interface API {
			getString(): string
			createImport(path: string, variable: string | string[], variable2?: string | string[]),
			createRequire(path: string, variable: string)
			createConst(field: Field, name: string, value: string)
			createLet(field: Field, name: string, value: string)
			createVar(field: Field, name: string, value: string)
			createAnonymousArrowFunction(filed: Field, params: string | string[])
			createAnonymousFunction(filed: Field, params: string | string[])
			createArrowFunction(filed: Field, name: string, params: string | string[])
			createFunction(filed: Field, name: string, params: string | string[])
			createFunctionRun(filed: Field, name: string, params?: string | string[])
		}
	}

	namespace Import {
		enum Type  {
			import = 'import',
			require = 'require'
		}

		interface Source {
			type: Type
			variable?: string
			variables?: string[]
			path: string
		}
	}

	namespace Wrapper {
		type Type = 'wrapper'

		interface Source {
			type: Type
			values: WrapperSourceType[],
			generator(value: WrapperSourceType)
		}
	}

	namespace Variable {
		type Type = 'let' | 'var' | 'const'

		interface Source {
			type: Type
			name: string
			value: string
		}
	}

	namespace Function {
		type Type  = 'function' | 'anonymous' | 'arrow' | 'anonymous-arrow' | 'run-function'

		interface Source {
			type: Type
			params?: string | string[]
			name?: string
			source?: Module.SourcesType[]
		}

		interface API {
			addSource(source: Module.SourcesType)
		}
	}

	namespace String {
		type Types = 'source'
		interface Source {
			type: Types
			source: string
		}
	}

}

type Field = 'top' | 'center' | 'bottom'

export function createObjectFile(name: string, path: string): {
	getString(): string
	createImport(path: string, variable: string | string[], variable2?: string | string[]),
	createRequire(path: string, variable: string)
	createConst(field: Field, name: string, value: string)
	createLet(field: Field, name: string, value: string)
	createVar(field: Field, name: string, value: string)
	createAnonymousArrowFunction(filed: Field, params: string | string[])
	createAnonymousFunction(filed: Field, params: string | string[])
	createArrowFunction(filed: Field, name: string, params: string | string[])
	createFunction(filed: Field, name: string, params: string | string[])
	createFunctionRun(filed: Field, name: string, params?: string | string[])
}