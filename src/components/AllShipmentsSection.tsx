import React from 'react'
import ShipmentDetailsCard from './ShipmentDetailsCard'
import _isEmpty from 'lodash/isEmpty'
import { Link } from 'react-router-dom'

type Props = {
	data: object[]
	searchText: string,
	filter: boolean,
}

const ShippingDetailsPage = ({ data, searchText, filter }: Props) => {
	let filteredData: object[] = []
	filteredData = data.filter(({id, filter}: any) => id.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

	if(filter) filteredData = filteredData.filter(({status}: any) => status.toLocaleLowerCase() === 'active')
	
	return (
		<div className="column">
		{
			_isEmpty(filteredData) ?  `no search results for "${searchText}"`
			:
			filteredData.map(
				(shipment: any) => {
				return (
					<Link
						key={shipment.id}
						to={`shipment/${shipment.id}`}
					>
						<ShipmentDetailsCard
							shipment={shipment} />
					</Link>
					)
				})
		}
	</div>
	)
}

export default ShippingDetailsPage
