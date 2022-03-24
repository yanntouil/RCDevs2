import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ACTION_TYPE from '../../redux/action-types';
//import ACTION_TYPE from '../../redux/action-types';

const RootComponent = (props) => {
	const dispatch = useDispatch()
	const { dummyValue } = useSelector((state) => ({ ...state.dummyReducer }))// Data
	// The dummyReducer is defined in the folder redux/reducers, it has only one ACTION_TYPE.. 
	// ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE

	return(
		<div>
			<h3>Update dummyValue in dummyReducer</h3>
			<div>DummyValue: { props.dummyValue /* dummyValue */}</div>
			<button
				onClick={() => {
					// change dummyValue in dummyReducer to yes
					props.switchYes()
					// dispatch({type: ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE, payload: 'yes'})
				}}
			>
				Set dummyValue to 'yes'
			</button>
			<button
				onClick={() => {
					// change dummyValue in dummyReducer to no
					props.switchNo()
					dispatch({type: ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE, payload: 'no'})
				}}
			>
				Set dummyValue to 'no'
			</button>
		</div>
	);

};

const mapStateToProps = state => ({
	dummyValue: state.dummyReducer.dummyValue
});

const mapDispatchToProps = dispatch => ({
	// or any otherway you want...
	//updateDummyValue: ...
	switchYes: () => dispatch({type: ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE, payload: 'yes'}),
	switchNo: () => dispatch({type: ACTION_TYPE.DUMMY_REDUCER.UPDATE_DUMMY_VALUE, payload: 'no'}),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);