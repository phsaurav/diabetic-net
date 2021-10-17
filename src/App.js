import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Footer from './components/Footer/Footer';
import NotFound from './containers/NotFound/NotFound';
import Blogs from './containers/Blogs/Blogs';
import About from './containers/About/About';

function App() {
	return (
		<div>
			<Router>
				<div className="flex flex-col justify-between h-screen">
					<div>
						<Header></Header>
						<Switch>
							<Route exact path="/">
								<Home></Home>
							</Route>
							<Route path="/home">
								<Home></Home>
							</Route>
							<Route path="/blogs">
								<Blogs></Blogs>
							</Route>
							<Route path="/about">
								<About></About>
							</Route>
							<Route path="/login">
								<Login></Login>
							</Route>
							<Route path="/register">
								<Register></Register>
							</Route>
							<Route>
								<NotFound></NotFound>
							</Route>
						</Switch>
					</div>
					<Footer></Footer>
				</div>
			</Router>
		</div>
	);
}

export default App;
