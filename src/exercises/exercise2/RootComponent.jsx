import React, { useState } from 'react'
import './RootComponent.css'

const RootComponent = () => {
    /**
     * Shop
     */
    const [shop, setShop] = useState('Shop1')
    const switchState = () => setShop(shop === 'Shop1' ? 'Shop2' : 'Shop1')

    /**
     * Form
     */
    const [formNumber, setFormNumber] = useState('')
    const handelFormChange = ({ target }) => {
        if (target.value > 0) setFormNumber(target.value)
        else setFormNumber(1)
    }

    /**
     * Change
     */
    const [number, setNumber] = useState('')
    const calculateChange = () => {
        if (!(formNumber > 0)) return
        setNumber(formNumber)
        setFormNumber('')
    }

    return (
        <div>
            <button 
				className="btn btn-primary"
				onClick={switchState}>
				Toggle shop name
			</button>
            <div className="mt-3">
                <h2 className="mb-3">{shop}</h2>
                <div className="mb-3 d-flex gap-3">
                    <input
                        type="number"
                        className="form-control w-25"
                        placeholder="integer value"
                        value={formNumber}
                        onChange={handelFormChange}
                    />
                    {formNumber && (
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={calculateChange}
                        >
                            Calculate change for {formNumber}
                        </button>
                    )}
                    {number && (
                        <div className="flex-fill d-flex justify-content-end h4">
                            {number}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RootComponent
