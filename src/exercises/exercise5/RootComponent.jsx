import React, { useState } from 'react';
import './RootComponent.css';

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
			<div className="d-flex flex-column justify-content-center align-items-center">
				<button 
					className="btn btn-warning btn-lg py-4"
					onClick={switchState}>
					Toggle shop name
				</button>
                <h2 className="mt-3">{shop}</h2>
			</div>
            <div className="container mt-3">
                <div className="row justify-content-center align-items-end">
					<div className={`col-6 d-flex flex-column ${changes.length > 0 ? 'align-items-end' : 'align-items-center'}`}>
                        <div  className="col-6 d-flex flex-column gap-2" style={{maxWidth: '24rem'}}>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Integer value"
                                value={formNumber}
                                onChange={handelFormChange}
                            />
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={calculateChange}
                            >
                                Calculate change for {formNumber ? formNumber :  '...'}
                            </button>
                        </div>
                    </div>
                    {changes.length > 0 && (
                        <div className="col-6 d-flex flex-column align-items-start">
                            <div  className="col-6 d-flex flex-column gap-2" style={{maxWidth: '24rem'}}>
                                <div className="h5">Change for {number} :</div>
                                <div 
                                    style={{
                                        display: 'grid',
                                        gap: '0.25rem',
                                        gridTemplateColumns: 'repeat(3, 1fr)'
                                    }}>
                                    {changes.map(change => (
                                        <div className="d-flex justify-content-center rounded align-items-center bg-light p-2 text-center">
                                            {change.cut} x {change.amountOfCut}
                                        </div>
                                    ))}
                                </div>
                                <button 
                                    className="btn btn-success"
                                    onClick={addToLog}>
                                    Return change
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                {logs.length > 0 && (
                    <div 
                        className="d-flex justify-content-center flex-wrap gap-4 mt-3"
                        style={{
                            
                        }}>
                        {logs.map((log, index) => (
                            <div className={`d-flex justify-content-center align-items-center text-center p-2 rounded border ${index === 0 ? 'border-success' : ''}${index === logs.length - 1 ? 'border-danger' : ''}`} style={{aspectRatio: '1 / 1', width: '9.1875rem'}}>Returned {log} cuts back</div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}


export default RootComponent;