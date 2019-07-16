import React, { useState, useEffect } from 'react'
import { Props as ShipmentProps } from './ShipmentDetailsCard'
import ShipmentDetailsPage from './ShippingDetailsPage'

type Props = {
	data: {
		shipments: Array<ShipmentProps>,
	}
}

const App: React.FC = () => {
	const [data, setData] = useState([])

	
	async function fetchData() {
    const res = await fetch(`http://localhost:3000/shipments`)
    res
      .json()
      .then(res => {
				console.log({res})
				setData(res)
			})
  }

  useEffect(() => {
    fetchData()
  }, [])
	
  return (
    <div>
			<header>
				<h3>My Shipments</h3>
			</header>
			<ShipmentDetailsPage data={data}/>
    </div>
  )
}

export default App
