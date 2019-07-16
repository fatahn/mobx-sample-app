import React from 'react'

export type Props = {
	shipment: {
		name: string,
		destination:string,
		origin:string,
		status:string,	
		id:string,	
	}
}

const ShipmentDetailsCard = ({shipment}: Props) => {
	return (
		<div className="column">
			<div className="box">
				<ul>
					<li>{shipment.name}</li>
					<li>id: {shipment.id}</li>
					<li>{shipment.destination}</li>
					<li>{shipment.origin}</li>
					<li>{shipment.status}</li>
				</ul>
			</div>
		</div>
	)
}

export default ShipmentDetailsCard
