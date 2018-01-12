import {mapImports, mapField} from '../parser'

describe('Parser | Helper', () => {
	it('should return function and variable', () => {
		const mock = [
			{
				type: 'function',
				name: 'foo'
			},
			{
				type: 'var',
				name: 'bar',
				value: `'name'`
			}
		] as Module.SourcesType[]

		expect(mapField(mock)).toEqual([
			'function foo() {}',
			`var bar = 'name';`
		])
	})

	it('should return array imports', () => {
		const mock = {
			'react': {
				type: 'import',
				variable: 'React',
				path: 'react'
			},
			'react-redux': {
				type: 'import',
				variables: ['connect'],
				path: 'react-redux'
			}
		}

		expect(mapImports(mock)).toEqual([
			`import React from 'react';`,
			`import {connect} from 'react-redux';`
		])
	})
})