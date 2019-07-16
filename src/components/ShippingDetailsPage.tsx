import React from 'react'
import ShipmentDetailsCard from './ShipmentDetailsCard'
import _isEmpty from 'lodash/isEmpty'
import _cloneDeep from 'lodash/cloneDeep'

type Props = {
	data: object[]
	searchText: string,
	filter: boolean,
}

const ShippingDetailsPage = ({ data, searchText, filter }: Props) => {
	let filteredData: object[] = []
	{
		filteredData = data.filter(({id, filter}: any) => id.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

		if(filter){
			filteredData = filteredData.filter(({status}: any) => status.toLocaleLowerCase() === 'active')
		}
	}
	
	return (
		<div className="column">
		{
			_isEmpty(filteredData) ?  `no search results for "${searchText}"`
			:
			filteredData.map(
				(shipment: any) => <ShipmentDetailsCard key={shipment.id} shipment={shipment} />)
		}
	</div>
	)
}

export default ShippingDetailsPage
