namespace Module {
  type Variable = 'let' | 'var' | 'const'
  type Field = 'top' | 'center' | 'bottom'

  namespace Template {
    interface InitSource {
      imports: ''
      top: ''
      center: ''
      bottom: ''
    }

    interface Source {
      imports: string[]
      top: string[]
      center: string[]
      bottom: string[]
    }
  }
}