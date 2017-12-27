export function addLine(template: Module.Template.Source, field: Module.Field, string: string) {
  if(template[field]) {
    template[field].push(string)
    return string
  }

  return null
}