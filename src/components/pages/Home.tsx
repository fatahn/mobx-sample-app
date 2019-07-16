import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'

import ShipmentDetailsPage from '../AllShipmentsSection'
import { DataStoreContext } from '../../stores/mobxStore';
import { toJS } from 'mobx'

type Props = {
	dataStore: {
		fetchData: any,
		target: any,
	}
}

const App = observer(
	() => {
		const dataStore = useContext(DataStoreContext)
		const data = toJS(dataStore.data)
		const [searchText, setSearchText] = useState('')
		const [isActive, setIsActive] = useState(false)
		const [isFilterOpen, setIsFilterOpen] = useState(false)
		const onChange = (e: { target: HTMLInputElement; }) => {
			setSearchText(e.target.value)
		}
		const onToggle = (e: { target: HTMLInputElement }) => {
			setIsActive(!isActive)
			const filter: string = isActive ? `ACTIVE` : ``
			dataStore.filter(filter)
		}
		
		const onShowFilter = () => {
			setIsFilterOpen(!isFilterOpen)
		}
		
		return (
			<div className="container">
				<header>
					<h3>My Shipments</h3>
					<input onChange={onChange} />
					<br />
					<button onClick={onShowFilter}>
						{
							isFilterOpen ? `Clear Filer` : `Filter`
						}
					</button>
					<br />
					{
						isFilterOpen ?
						<label>
							ACTIVE SHIPMENT
							<input
								name="isActive"
								type="checkbox"
								checked={isActive}
								onChange={onToggle} />
						</label>
						:
						null
					}

				</header>
				<ShipmentDetailsPage
					data={data}
					searchText={searchText}
					filter={isActive}
					/>
			</div>
		)
	}
)
export default App
