import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from '../redux/store';

export default ({ component: Component, ...rest }) => {
	const state = store.getState();
	// const isAuthenticated = true;
    const isAuthenticated = state.authReducers.account != null ? true : false;
	console.log(state);
	const history = createBrowserHistory({
		forceRefresh: true,
	});
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
};