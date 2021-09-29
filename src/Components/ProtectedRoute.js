import React from 'react';
import { Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from '../redux/store';

export default ({ component: Component, ...rest }) => {
	const state = store.getState();
	const isAuthenticated = state.authReducers.user != null ? true : false;
	const history = createBrowserHistory({
		forceRefresh: true,
	});
	return (
		<Route
			{...rest}
			render={props => {
				return isAuthenticated ? (
					<Component {...props} />
				) : (
					history.push('/login')
				);
			}}
		/>
	);
};