import React from 'react'
import ShipmentDetailsCard, { Props as ShipmentProps } from './ShipmentDetailsCard'

type Props = {
	data: object[]
}

const ShippingDetailsPage = ({ data }: Props) => {
	return (
		<section>
		{
			data.map(
				(shipment: any) => <ShipmentDetailsCard shipment={shipment} />)
		}
	</section>
	)
}

export default ShippingDetailsPage
