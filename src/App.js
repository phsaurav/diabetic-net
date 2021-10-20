import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './containers/NotFound/NotFound';
import Blogs from './containers/Blogs/Blogs';
import About from './containers/About/About';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Subscribe from './containers/Subscribe/Subscribe';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen">
						<div>
							<Header></Header>
							<Switch>
								<Route exact path="/">
									<Redirect to="/home"></Redirect>
								</Route>
								<Route path="/home">
									<Home></Home>
								</Route>
								<PrivateRoute path="/blogs">
									<Blogs></Blogs>
								</PrivateRoute>
								<PrivateRoute path="/about">
									<About></About>
								</PrivateRoute>
								<Route path="/login">
									<Login></Login>
								</Route>
								<Route path="/register">
									<Register></Register>
								</Route>
								<PrivateRoute path="/subscribe">
									<Subscribe></Subscribe>
								</PrivateRoute>
								<Route>
									<NotFound></NotFound>
								</Route>
							</Switch>
						</div>
						<Footer></Footer>
					</div>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
