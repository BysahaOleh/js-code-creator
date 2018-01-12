import {importParser} from '../import'

describe('Import | Parser', () => {
	it('should return base import', () => {
		const mock = {
			type: 'import',
			variable: 'React',
			path: 'react'
		} as Module.Import.Source

		expect(importParser(mock)).toEqual(`import React from 'react';`)
	})

	it('should return import with addition variables', () => {
		const mock = {
			type: 'import',
			variable: 'React',
			variables: ['Component'],
			path: 'react'
		} as Module.Import.Source

		expect(importParser(mock)).toEqual(`import React, {Component} from 'react';`)
	})

	it('should return import without addition variables', () => {
		const mock = {
			type: 'import',
			variable: 'React',
			variables: [],
			path: 'react'
		} as Module.Import.Source

		expect(importParser(mock)).toEqual(`import React from 'react';`)
	})


	it('should return require', () => {
		const mock = {
			type: 'require',
			variable: 'React',
			path: 'react'
		} as Module.Import.Source

		expect(importParser(mock)).toEqual(`const React = require('react');`)
	})
})