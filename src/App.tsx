import React from 'react'
import ShipmentDetailsCard, { Props as ShipmentProps } from './ShipmentDetailsCard'

type Props = {
	shipments: Array<ShipmentProps>,
}

const App: React.FC = (props: Props) => {
  return (
    <div>
			<header>
				<h3>My Shipments</h3>
			</header>
			<section>
				{
					props.shipments.map(
						(shipment) => <ShipmentDetailsCard shipment={shipment} />)
				}
			</section>
    </div>
  );
}

export default App;
