import {createObjectFile} from '../'

describe('Main', () => {
	describe('Create file', () => {
		let object

		beforeEach(() => {
			object = createObjectFile('app/', 'index.js')
		})

		it('should return string file', () => {
			expect(object.getString()).toEqual('')
		})

		it('should return import', () => {
			object.createImport('react', 'React')
			expect(object.getString()).toEqual(`import React from 'react';`)
		})
	})
})