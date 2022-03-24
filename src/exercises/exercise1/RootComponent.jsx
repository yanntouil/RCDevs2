import React, { useState } from 'react'
import './RootComponent.css'

const RootComponent = () => {
    /**
     * Shop
     */
	 const [shop, setShop] = useState('Shop1')
	 const switchState = () => setShop(shop === 'Shop1' ? 'Shop2' : 'Shop1')
 
	return(
		<div>
            <button 
				className="btn btn-primary"
				onClick={switchState}>
				Toggle shop name
			</button>
			<div className="mt-3">
                <h2 className="mb-3">{shop}</h2>
			</div>
		</div>
	)
}

export default RootComponent