export function createVariable(type: Module.Variable, template: Module.Template.Source, field: Module.Field, name: string, value: string) :string{
  if(template[field]) {
    const srt = `${type} ${name} = ${value}`
    template[field].push(srt)
    return srt
  }
  return null
}

export const addVar = createVariable.bind(null, 'var')
export const addLet = createVariable.bind(null, 'let')
export const addConst = createVariable.bind(null, 'const')