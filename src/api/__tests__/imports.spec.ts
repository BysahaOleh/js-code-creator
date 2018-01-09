import {createImport, createRequire} from '../imports'
import Storage from '../../core/storage'

describe('Test test', () => {

	describe('Import', () => {
		let storage;

		beforeEach(() => {
			storage = new Storage('src', 'app.js')
		})

		it('should return correct object #01', () => {
			createImport(storage, 'react', 'React', ['Component'])
			expect(storage.getStore().imports).toEqual({
				'react': {
					type: 'import',
					variable: 'React',
					variables: ['Component'],
					path: 'react'
				}
			});
		});

		it('should return correct object #02', () => {
			createImport(storage,'react',  ['Component'], 'React')

			expect(storage.getStore().imports).toEqual({
				'react': {
					type: 'import',
					variable: 'React',
					variables: ['Component'],
					path: 'react'
				}
			});
		});

		it('should return correct object #03', () => {
			createImport(storage,'react',  'React')
			expect(storage.getStore().imports).toEqual({
				'react': {
					type: 'import',
					variable: 'React',
					path: 'react'
				}
			});
		});

		it('should return correct object #04', () => {
			createImport(storage,'react',  ['Component'])
			expect(storage.getStore().imports).toEqual({
				'react': {
					type: 'import',
					variables: ['Component'],
					path: 'react'
				}
			});
		});
	});

	describe('Require', () => {
		let storage;

		beforeEach(() => {
			storage = new Storage('src', 'app.js')
		})

		it('should return correct json | just require [require("library")]', function () {
			createRequire(storage,'react')
			expect(storage.getStore().imports).toEqual({
				'react': {
					type: 'require',
					path: 'react'
				}
			});
		});

		it('should return correct json | Require [const React = require("library")]', function () {
			createRequire(storage,'react', 'React')
			expect(storage.getStore().imports).toEqual({
				'react': {
					type: 'require',
					path: 'react',
					variable: 'React'
				}
			});
		});
	});
});