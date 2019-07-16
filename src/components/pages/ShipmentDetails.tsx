import React, { useContext }  from 'react'
import { observer } from 'mobx-react-lite'
import _find from 'lodash/find'

import ShipmentDetailsCard from '../ShipmentDetailsCard'
import { toJS } from 'mobx'
import { DataStoreContext } from '../../stores/mobxStore';
import { Props as ShipmentProps } from '../ShipmentDetailsCard'

type Props = {
	location: object,
	id: string,
	match: {
		params: {
			id: string
		}
	},
	shipment: ShipmentProps
}

const ShipmentDetails = observer((props: Props) => {
	const dataStore = useContext(DataStoreContext)
	const shipment: any = _find(toJS(dataStore.data), (shipment: any) => shipment.id === props.match.params.id)

	return (
		<div className="container">
			<ShipmentDetailsCard 
				location={props.location}
				shipment={shipment}
				actions={dataStore} />
		</div>
	)
})

export default ShipmentDetails
