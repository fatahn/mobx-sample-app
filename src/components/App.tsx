import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from './pages/Home'
import ShipmentDetails from './pages/ShipmentDetails'

const App = () => {
	return (
		<Router>
			<div>
				<header>
					<h3>My shipment Dashboard</h3>
				</header>
					<Route exact path="/" component={Home} />
					<Route path="/shipment/:id" component={ShipmentDetails} />
			</div>
		</Router>
	)
}

export default App
