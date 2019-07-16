import React, { useState, useEffect } from 'react'

export type Props = {
	shipment: {
		name: string,
		destination:string,
		origin:string,
		status:string,	
	}
}

const ShipmentDetailsCard = ({shipment}: Props) => {
	return (
		<div>
			<li>{shipment.name}</li>
			<li>{shipment.destination}</li>
			<li>{shipment.origin}</li>
			<li>{shipment.status}</li>
		</div>
	)
}

export default ShipmentDetailsCard
