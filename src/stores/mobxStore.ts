import { observable, action } from 'mobx'
import { createContext } from 'react'
import dotenv from 'dotenv'

dotenv.config()

const endpoint: any = process.env.REACT_APP_ENDPOINT

class DataStore {
	@observable data = []
	@observable filters = ''

	constructor(){
		this.fetchData()
	}
		
	@action
	fetchData = async () => {
		const res = await fetch(endpoint)

		res
		.json()
		.then((res: any) => this.data = res)
	}
	
	@action
		filter = (filter: string) => { this.filters = filter}
}

export const DataStoreContext = createContext(new DataStore())
