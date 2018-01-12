import {variableParser} from '../variable'

describe('Variable | Parser', () => {
	it('should return variable', () => {
		const mock = {
			type: 'let',
			name: 'foo',
			value: `'name'`
		} as Module.Variable.Source

		expect(variableParser(mock)).toEqual(`let foo = 'name';`)
	})
})