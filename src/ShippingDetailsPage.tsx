import React from 'react'
import ShipmentDetailsCard from './ShipmentDetailsCard'
import _isEmpty from 'lodash/isEmpty'

type Props = {
	data: object[]
	searchText: string,
}

const ShippingDetailsPage = ({ data, searchText }: Props) => {
	let filteredData: object[] = []
	{
		if(searchText){
			console.log('aaa',filteredData)
			filteredData = data.filter(({id}: any) => id.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
		} else filteredData = data
	}
	
	return (
		<div className="column">
		{
			_isEmpty(filteredData) ?  `no search results for "${searchText}"`
			:
			filteredData.map(
				(shipment: any, index: number) => <ShipmentDetailsCard key={index} shipment={shipment} />)
		}
	</div>
	)
}

export default ShippingDetailsPage
