import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PrivateRoute.css';

const PrivateRoute = ({ children, ...rest }) => {
	const { user, isLoading } = useAuth();
	if (isLoading) {
		return <div className="w-12 h-12 border-3 rounded-full loader"></div>;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.displayName ? (
					children
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: location } }}
					></Redirect>
				)
			}
		></Route>
	);
};

export default PrivateRoute;
