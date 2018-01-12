import {functionParse} from '../function'

describe('Parser: Function', () => {
	it('should return base function', () => {
		const mock = {
			type: 'function',
			params: 'a',
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('function foo(a) {}')
	})

	it('should return function with few params', () => {
		const mock = {
			type: 'function',
			params: ['a', 'p', 'm'],
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('function foo(a, p, m) {}')
	})

	it('should return anonymous function', () => {
		const mock = {
			type: 'anonymous',
			params: 'a'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('function (a) {}')
	})

	it('should return anonymous function with few params', () => {
		const mock = {
			type: 'anonymous',
			params: ['a', 'p', 'm']
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('function (a, p, m) {}')
	})

	it('should return arrow function', () => {
		const mock = {
			type: 'arrow',
			params: 'm',
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('const foo = (m) => {}')
	})

	it('should return arrow function with few params', () => {
		const mock = {
			type: 'arrow',
			params: ['a', 'p', 'm'],
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('const foo = (a, p, m) => {}')
	})

	it('should return anonymous arrow function', () => {
		const mock = {
			type: 'anonymous-arrow',
			params: 'm',
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('(m) => {}')
	})

	it('should return anonymous arrow function with few params', () => {
		const mock = {
			type: 'anonymous-arrow',
			params: ['a', 'p', 'm'],
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('(a, p, m) => {}')
	})

	it('should should return function without params', () => {
		const mock = {
			type: 'function',
			name: 'foo'
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('function foo() {}')
	})

	it('should return function run', () => {
		const mock = {
			type: 'run-function',
			name: 'connect',
			params: ['mapStateToProps']
		} as Module.Function.Source

		expect(functionParse(mock)).toEqual('connect(mapStateToProps);')
	})
})