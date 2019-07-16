import React, { useState, useContext, ButtonHTMLAttributes } from 'react'
import { observer } from 'mobx-react-lite'

import { Props as ShipmentProps } from './ShipmentDetailsCard'
import ShipmentDetailsPage from './ShippingDetailsPage'
import { DataStoreContext } from './stores/mobxStore';

type Props = {
	dataStore?: {
		fetchData: any,
		target: any,
	}
}

const App = observer(
	() => {
		const dataStore = useContext(DataStoreContext).fetchData()
		console.log('cccc', dataStore)
		const [searchText, setSearchText] = useState('')
		const [isActive, setIsActive] = useState(false)
		const [isFilterOpen, setIsFilterOpen] = useState(false)
		const onChange = (e: { target: HTMLInputElement; }) => {
			setSearchText(e.target.value)
		}
		const onToggle = (e: { target: HTMLInputElement }) => {
			setIsActive(!isActive)
		}
		
		const onShowFilter = () => {
			setIsFilterOpen(!isFilterOpen)
		}
		
		return (
			<div>
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
				{/* <ShipmentDetailsPage data={dataStore} searchText={searchText}/> */}
			</div>
		)
	}
)
export default App
