import {generateTemplate} from '../helpers/template'
import {toString} from './transform'
import {addImport, addRequire} from '../func/imports'
import {addConst, addLet, addVar} from '../func/variables'
import {
  addAnonymousFunction, addArrowFunction, addArrowFunctionAdvanced,
  addArrowFunctionWithReturn, addFunction, addRunFunction
} from '../func/functions'

const defaultInitSource = {
  imports: '',
  top: '',
  center: '',
  bottom: ''
} as Module.Template.InitSource

function Core(initSource: Module.Template.InitSource) {
  let template = generateTemplate(Object.assign(defaultInitSource, initSource))

  this.toString = toString.bind(null, template)
  this.getSource = () => template

  this.addImport = addImport.bind(null, template)
  this.addRequire = addRequire.bind(null, template)

  this.addConst = addConst.bind(null, template)
  this.addLet = addLet.bind(null, template)
  this.addVar = addVar.bind(null, template)

  this.addAnonymousFunction = addAnonymousFunction.bind(null, template)
  this.addArrowFunction = addArrowFunction.bind(null, template)
  this.addArrowFunctionAdvanced = addArrowFunctionAdvanced.bind(null, template)
  this.addArrowFunctionWithReturn = addArrowFunctionWithReturn.bind(null, template)
  this.addFunction = addFunction.bind(null, template)
  this.addRunFunction = addRunFunction.bind(null, template)
}

export default function createTemplate(initSource: Module.Template.InitSource) {
  return new Core(initSource)
}
