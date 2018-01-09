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
  	enum Type {
  		let = 'let',
			const = 'const',
			var = 'var'
		}

		interface Source {
  		type: Type
			name: string
			value: string
		}
	}

	namespace Function {
		enum Type {
  		function = 'function',
			anonymous = 'anonymous',
			arrow = 'arrow',
			anonymousArrow = 'anonymous-arrow'
		}

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