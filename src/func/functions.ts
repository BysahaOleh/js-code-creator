export function addFunction(template: Module.Template.Source, field: Module.Field, name: string, params: string[] | string, body: string) {
  if(template[field]) {
    const parameters = typeof params === 'string' ? params : params.join(', ')
    let str = `function ${name} (${parameters}) {${body}}`
    template[field].push(str)
    return str
  }
  return null
}

export function addAnonymousFunction(template: Module.Template.Source, field: Module.Field, params: string[] | string, body: string) {
  if(template[field]) {
    const parameters = typeof params === 'string' ? params : params.join(', ')
    let str = `function (${parameters}) {${body}}`
    template[field].push(str)
    return str
  }
  return null
}

export function addArrowFunction(template: Module.Template.Source, field: Module.Field, params: string[] | string, body: string) {
  if(template[field]) {
    const parameters = typeof params === 'string' ? params : params.join(', ')
    let str = `(${parameters}) => {${body}}`
    template[field].push(str)
    return str
  }
  return null
}

export function addArrowFunctionWithReturn(template: Module.Template.Source, field: Module.Field, params: string[] | string, body: string) {
  if(template[field]) {
    const parameters = typeof params === 'string' ? params : params.join(', ')
    let str = `(${parameters}) => ${body}`
    template[field].push(str)
    return str
  }
  return null
}

export function addArrowFunctionAdvanced(template: Module.Template.Source, field: Module.Field, params: string[] | string, body: string) {
  if(template[field]) {
    const parameters = typeof params === 'string' ? params : params.join(', ')
    let str = `(${parameters}) => (${body})`
    template[field].push(str)
    return str
  }
  return null
}

export function addRunFunction(template: Module.Template.Source, field: Module.Field, name: string, actions: string[]) {
  if(template[field]) {
    let str = `${name}`

    if(actions.length) {
      actions.map(action => str = str + `(${action})`)
    }

    str = str + '()'
    template[field].push(str)
    return str
  }
}