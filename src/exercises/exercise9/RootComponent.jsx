import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'

const RootComponent = (props) => {

	console.log('<Exercise::RootComponent>')

	return(
		<>
			<Menu />
			<Routes>
				<Route path="/route1" exact element={<Route1 />}/>
				<Route path="/route2" exact element={<Route2 />}/>
				<Route path="/*" element={<Page404 />}/>
			</Routes>
		</>
	);

};

export default RootComponent


const Route1 = () => {
	return(
		<div className="d-flex justify-content-center align-items-center h-100">
			<h2 className="display-1">Route 1</h2>
		</div>
	)

}
const Route2 = () => {

	return(
		<div className="d-flex justify-content-center align-items-center h-100">
			<h2 className="display-1">Route 2</h2>
		</div>
	)

}
const Page404 = () => {

	return(
		<div className="d-flex justify-content-center align-items-center h-100">
			<h2 className="display-1">404</h2>
		</div>
	)

}
const Menu = () => {

	return(
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<NavLink className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'} to="/route1" end>Route 1</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'} to="/route2" end>Route 2</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className={({ isActive }) => isActive ? 'nav-link text-success' : 'nav-link'} to="/azerty">Fallback</NavLink>
			</li>
		</ul>
	)

}
