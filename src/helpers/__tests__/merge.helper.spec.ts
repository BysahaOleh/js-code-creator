import {mergeImports} from '../merge'

describe('Merge | Helpers', () => {

	it('should return merged object', () => {
		const mock = [
			{
				type: 'import',
				variable: 'React',
				variables: ['Component'],
				path: 'react'
			},
			{
				type: 'require',
				variable: 'React',
				variables: ['connect', 'Component', 'type'],
				path: 'redux'
			}
		] as Module.Import.Source[]

		expect(mergeImports(mock[0], mock[1])).toEqual({
			type: 'import',
			variable: 'React',
			variables: ['Component', 'connect', 'type'],
			path: 'react'
		})
	})

	it('should return error if variable is not same in both object', () => {
		const mock = [
			{
				type: 'import',
				variable: 'React',
				variables: ['Component'],
				path: 'react'
			},
			{
				type: 'require',
				variable: 'Redux',
				variables: ['connect', 'Component', 'type'],
				path: 'redux'
			}
		] as Module.Import.Source[]

		expect(() => {
			mergeImports(mock[0], mock[1])
		}).toThrow('Parser error: The name of the variables must be the same for the same import')
	})

	it('should return correct array if variables isn\'t exist in first array ', () => {
		const mock = [
			{
				type: 'import',
				variable: 'React',
				path: 'react'
			},
			{
				type: 'require',
				variable: 'React',
				variables: ['connect'],
				path: 'react'
			}
		] as Module.Import.Source[]

		expect(mergeImports(mock[0], mock[1])).toEqual({
			type: 'import',
			variable: 'React',
			variables: ['connect'],
			path: 'react'
		})
	})

	it('should return correct array if variables isn\'t exist in second array ', () => {
		const mock = [
			{
				type: 'import',
				variable: 'React',
				variables: ['connect'],
				path: 'react'
			},
			{
				type: 'require',
				variable: 'React',
				path: 'react'
			}
		] as Module.Import.Source[]

		expect(mergeImports(mock[0], mock[1])).toEqual({
			type: 'import',
			variable: 'React',
			variables: ['connect'],
			path: 'react'
		})
	})
})