import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useCallback, useMemo, useRef, useState } from "react";

import Exercise1 from "./exercises/exercise1/RootComponent";
import Exercise2 from "./exercises/exercise2/RootComponent";
import Exercise3 from "./exercises/exercise3/RootComponent";
import Exercise4 from "./exercises/exercise4/RootComponent";
import Exercise5 from "./exercises/exercise5/RootComponent";
import Exercise6 from "./exercises/exercise6/RootComponent";
import Exercise7 from "./exercises/exercise7/RootComponent";
import Exercise8 from "./exercises/exercise8/RootComponent";
import Exercise9 from "./exercises/exercise9/RootComponent";
import Exercise10 from "./exercises/exercise10/RootComponent";
import Exercise11 from "./exercises/exercise11/RootComponent";

function App() {

	const { current: exercices } = useRef([
		['exercise1', 'button with onClick', Exercise1],
		['exercise2', 'input and save state on button click', Exercise2],
		['exercise3', 'Calculate change based on available cuts', Exercise3],
		['exercise4', 'Add a return change button to propagate result up from ReturnChange to Shop', Exercise4],
		['exercise5', 'Re-rendering optimizations', Exercise5],
		['exercise6', 'Add a remembered state of returned cuts', Exercise6],
		['exercise7', 'Css styling (bootstrap classes are available)', Exercise7],
		['exercise9', 'useEffect that skips mount', Exercise8],
		['exercise9', 'useEffect that triggers one function on mount and another for all events after the first mount', Exercise9],
		['exercise10', 'Redux', Exercise10],
		['exercise11', 'react-router-dom Switch/Routes', Exercise11],
	]);

	const [selectedExercise, setSelectedExercise] = useState(exercices[0]);
	const [{ reRenderExercise }, setReRender] = useState({
		reRenderExercise: {},
	});

	const onChange = useCallback((event) => {
		setSelectedExercise([...exercices.find(([name]) => name === event.target.value)]);
		setReRender({
			reRenderExercise: {},
		});
	}, [exercices]);

	const SelectedExercise = selectedExercise[2];

	const renderReRenderButton = (onClick) => 
		<button
			style={{
				position: 'absolute',
				top: '0',
				right: '0',
				background: '#808080',
			}}
			onClick={onClick}
		>
			Reset
		</button>
	;

	return (
		<div>
			<div
				style={{
					minHeight: '70px',
				}}
				className="d-flex align-items-center justify-content-between p-4 bg-warning"
			>
				<div className="d-flex flex-column align-items-center">
					<select onChange={onChange} value={selectedExercise[0]}>
						{exercices.map(([name, label], index) => 
							<option
								key={index}
								value={name}
							>
								{name} {label}
							</option>
						)}
					</select>
				</div>
			</div>
			<div className="d-flex" id="app-exercises-display">
				<div className="border-warning position-relative">
					{renderReRenderButton(() => {
						setReRender(reRender => ({
							...reRender,
							reRenderExercise: {},
						}));
					})}
					{useMemo(() => <SelectedExercise key={reRenderExercise.length}/>, [reRenderExercise])}
				</div>
			</div>
			<div
				style={{
					minHeight: '70px',
				}}
				className="d-flex align-items-center justify-content-between p-4 bg-warning"
			></div>
		</div>
	);
}

export default App;
