import Storage from './storage'

import fileParser from '../parser'
import {createImport, createRequire} from '../api/imports'
import {createConst, createLet, createVar} from '../api/variables'
import {createAnonymousArrowFunction, createAnonymousFunction, createArrowFunction, createFunction} from '../api/functions'

export default function createObjectFile(path: string, name: string) {
	const template = new Storage(path, name)

	return {
		createImports: createImport.bind(null, template),
		createRequire: createRequire.bind(null, template),
		createConst: createConst.bing(null, template),
		createLet: createLet.bing(null, template),
		createVar: createVar.bing(null, template),
		createAnonymousArrowFunction: createAnonymousArrowFunction.bind(null, template),
		createAnonymousFunction: createAnonymousFunction.bing(null, template),
		createArrowFunction: createArrowFunction.bing(null, template),
		createFunction: createFunction.bing(null, template),
		toString: () => fileParser(template)
	}
}