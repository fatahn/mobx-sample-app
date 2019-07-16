import { observable, action } from 'mobx'
import { createContext } from 'react'
import dotenv from 'dotenv'

dotenv.config()

const endpoint: any = process.env.REACT_APP_ENDPOINT

class DataStore {
	@observable data = []
	@observable filters = ''
	@observable status = `pending`

	constructor(){
		this.fetchData()
	}
		
	@action
	fetchData = async () => {
		const res = await fetch(endpoint)

		res
		.json()
		.then((res: any) => {
			this.status = 'sucess'
			this.data = res
		})
	}
	
	@action
	filter = (filter: string) => { this.filters = filter}
		
	@action
	updateName = async (id: string, payload: any) => {
		const res = await fetch(`${endpoint}/${id}`, {
			method: `PATCH`,
			body: JSON.stringify(payload),
			headers:{'content-type': 'application/json'},
		})

		res
		.json()
		.then((res: any) => {
			this.status = 'sucess'
			this.data = res
		})
	}
}

export const DataStoreContext = createContext(new DataStore())
