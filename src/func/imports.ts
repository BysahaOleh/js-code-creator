export function addImport(template: Module.Template.Source, variable: string, path: string) :string{
  const srt = `imports ${variable} from '${path}'`
  template['imports'].push(srt)
  return srt
}

export function addRequire(template: Module.Template.Source, variable: string, path:string) {
  const srt = `const ${variable} = require('${path}')`
  template['imports'].push(srt)
  return srt
}