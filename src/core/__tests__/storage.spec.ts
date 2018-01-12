import Storage from '../storage'

describe('Storage', () => {

	it('should be correct initialization state', () => {
		const store = new Storage('src/', 'name.js')

		expect(store.getStore()).toEqual({
			path: 'src/',
			name: 'name.js',
			imports: {},
			top: [],
			center: [],
			bottom: []
		})

	})

	describe('Function', () => {
		let store

		beforeEach(() => {
			store = new Storage('src/', 'app.js')
		})

		it('should push elements (.push)', () => {
			store.push('top', {
				value: 'top'
			})

			expect(store.getStore().top).toEqual([
				{
					value: 'top'
				}
			])

			store.push('center', {
				value: 'center'
			})

			expect(store.getStore().center).toEqual([{
					value: 'center'
				}
			])

			store.push('bottom', {
				value: 'bottom'
			})


			expect(store.getStore().bottom).toEqual([{
					value: 'bottom'
				}
			])

			expect(store.getStore()).toEqual({
				path: 'src/',
				name: 'app.js',
				imports: {},
				top: [
					{
						value: 'top'
					}
				],
				center: [
					{
						value: 'center'
					}
				],
				bottom: [
					{
						value: 'bottom'
					}
				]
			})
		})

		it('should change element by id (.changeById)', () => {
			store.push('center', {
				value: 'no changed'
			})

			expect(store.getStore().center).toEqual([{
					value: 'no changed'
				}
			])

			store.changeById('center', 0, {
				value: 'changed'
			})

			expect(store.getStore().center).toEqual([{
					value: 'changed'
				}
			])
		})

		it('shouldn\'t change element by id (.changeById)', () => {
			store.push('center', {
				value: 'no changed'
			})

			expect(store.getStore().center).toEqual([{
					value: 'no changed'
				}
			])

			expect(store.changeById('center', 10, {
				value: 'changed'
			})).toBeFalsy()

			expect(store.getStore().center).toEqual([{
					value: 'no changed'
				}
			])
		})

		it('should get element by id (.getById)', () => {
			store.push('center', {
				value: 'element'
			})

			expect(store.getById('center', 0)).toEqual({
				value: 'element'
			})
		})

		it('shouldn\'t get element by id (.getById)', () => {
			expect(store.getById('center', 20)).toBeNull()
		})

		it('should set import', () => {
			store.pushImport({
				type: 'import',
				variable: 'React',
				path: 'react'
			})

			expect(store.getById('imports', 'react')).toEqual({
				type: 'import',
				variable: 'React',
				path: 'react'
			})
		})

		it('should correct set same imports', () => {
			store.pushImport({
				type: 'import',
				variable: 'React',
				path: 'react'
			})

			store.pushImport({
				type: 'import',
				variable: 'React',
				variables: ['Component'],
				path: 'react'
			})

			expect(store.getById('imports', 'react')).toEqual({
				type: 'import',
				variable: 'React',
				variables: ['Component'],
				path: 'react'
			})
		})

	})


})