import Storage from './storage'

import fileParser from '../parser'
import {createImport, createRequire} from '../api/imports'
import {createConst, createLet, createVar} from '../api/variables'
import {
	createAnonymousArrowFunction, createAnonymousFunction,
	createArrowFunction, createFunction, createFunctionRun
} from '../api/functions'

export default function createObjectFile(path: string, name: string): Module.CreateObjectFile.API {
	const template = new Storage(path, name)

	return {
		createImport: createImport.bind(null, template),
		createRequire: createRequire.bind(null, template),
		createConst: createConst.bind(null, template),
		createLet: createLet.bind(null, template),
		createVar: createVar.bind(null, template),
		createAnonymousArrowFunction: createAnonymousArrowFunction.bind(null, template),
		createAnonymousFunction: createAnonymousFunction.bind(null, template),
		createArrowFunction: createArrowFunction.bind(null, template),
		createFunction: createFunction.bind(null, template),
		createFunctionRun: createFunctionRun.bind(null, template),
		getString: () => fileParser(template)
	}
}