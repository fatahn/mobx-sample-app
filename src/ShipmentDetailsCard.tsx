import React from 'react'

export type Props = {
	shipment: {
		name: string,
		destination:string,
		origin:string,
		status:string,	
	}
}

const ShipmentDetailsCard = (props: Props) => {
	return (
		<div>
			<li>{props.shipment.name}</li>
			<li>{props.shipment.destination}</li>
			<li>{props.shipment.origin}</li>
			<li>{props.shipment.status}</li>
		</div>
	)
}

export default ShipmentDetailsCard;
