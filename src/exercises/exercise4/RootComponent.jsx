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
    const bankCuts = [1, 2, 5]// , 10, 20, 50, 100 ** , 500 - for those lucky enough to see it :) **
    const [changes, setChanges] = useState([])

    const calculateChange = () => {
        if (!(formNumber > 0)) return
        setNumber(formNumber)
        setFormNumber('')
        let rest = formNumber
        setChanges(
            bankCuts
            .sort((a, b) => b - a)
            .map(cut => {
                const amountOfCut = (rest - (rest % cut)) / cut
                rest -= amountOfCut * cut
                return {cut, amountOfCut}
            })
        )
    }

	/**
	 * Log
	 */
	const [logs, setLogs] = useState([])
    const addToLog = () => {
        const cutsBack = changes.reduce((amount, change) => {
            return amount + change.amountOfCut
        }, 0)
        setLogs([...logs, cutsBack])
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
                {changes.length > 0 && (
                    <>
                        <div className="mb-3 d-flex gap-3">
                            <div className="strong">Change for {number} :</div>
                            {changes.map(change => (
                                <div>
                                    {change.cut} x {change.amountOfCut}
                                </div>
                            ))}
                        </div>
                        <button 
                            className="mb-3 btn btn-primary"
                            onClick={addToLog}>
                            Return change
                        </button>
                    </>
                )}
                {logs.length > 0 && (
                    <div className="mb-3 gap-3">
                        {logs.map(log => (
                            <div>Returned {log} cuts back</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default RootComponent