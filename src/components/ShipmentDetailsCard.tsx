import React, { useState, useEffect } from 'react'
import _isEmpty from 'lodash/isEmpty';

export type Props = {
	shipment: {
		name: string,
		destination:string,
		origin:string,
		status:string,	
		id:string,	
	},
	location?: object,
	actions?: {
		updateName: Function,
		fetchData: Function,
		status: string,
	}
}

const ShipmentDetailsCard = ({ shipment, actions }: Props) => {
	const [isEditing, setIsEditing] = useState(false)
	const [content, setContent] = useState('')
	const onChange = (e: { target: HTMLInputElement }) => {
		setContent(e.target.value)
	}
	const onSave = () => {
		setIsEditing(!isEditing)
		if(isEditing){
			if(actions && actions.updateName !== undefined){
				actions.updateName(shipment.id, {
					name: content
				})
				actions.fetchData()		
			}
		}
		if(actions && actions.status === 'success') setIsEditing(!isEditing)
	}
	
	useEffect(() => {
		return () => {
			actions && actions.fetchData()
		};
	}, [shipment])
	
	return !_isEmpty(shipment) ?
				(
					<div className="column">
						<div className="box">
							<ul>
								<li>
									<h2>
										{shipment.name}
									</h2>
									{
										isEditing ?
										<input onChange={onChange} defaultValue={content} />
										:
										null
									}
									<button onClick={onSave}>{
											isEditing ?
											`SAVE` :
											`EDIT`
									}
									</button>
								</li>
								<li>id: {shipment.id}</li>
								<li>{shipment.destination}</li>
								<li>{shipment.origin}</li>
								<li>{shipment.status}</li>
							</ul>
						</div>
					</div>
				)
				:
				null
}

export default ShipmentDetailsCard
