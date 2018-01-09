export function generateTemplate(source: Module.Template.InitSource): Module.Template.Source {
  let newSource = {} as Module.Template.Source

  Object.keys(source).map(key => {
    newSource[key] = [source[key]]
  })

  return newSource
}