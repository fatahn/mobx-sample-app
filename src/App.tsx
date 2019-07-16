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
	const [searchText, setSearchText] = useState('')
	const onChange = (e: { target: HTMLInputElement; }) => {
		setSearchText(e.target.value)
	}
	
	async function fetchData() {
    const res = await fetch(`http://localhost:3000/shipments`)
    res
      .json()
      .then(res => {
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
				<input onChange={onChange} />
			</header>
			<ShipmentDetailsPage data={data} searchText={searchText}/>
    </div>
  )
}

export default App
