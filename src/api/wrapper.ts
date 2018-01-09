/*
import {isArray} from 'lodash'

export function createWrapper(storage: Module.Template.Storage,
															field: Module.Field,
															generator: (source: Module.SourcesType) => {},
															source?: Module.Wrapper.Source | Module.Wrapper.Source[]) {
	let config = {
		type: 'wrapper',
		generator
	}

	if (source) {
		if (isArray(source)) {
			config['source'] = source
		} else {
			config['source'] = [source]
		}
	}

	return new WrapperCore(storage, field, config)
}

function WrapperCore(storage: Module.Template.Storage, field: Module.Field, config) {
	let id = storage.push(field, config)

	this.addSource = (source: Module.Wrapper.Source) => {
		const prev = storage.getStore()[field][id]
		prev.source ? prev.source.push(source) : prev.storage = [source]
		return storage.changeById(field, id, prev)
	}
}*/
