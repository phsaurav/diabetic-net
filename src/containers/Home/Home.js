import { Switch, Route, useHistory } from 'react-router-dom';
import React from 'react';
import Hero from '../../components/Hero/Hero';
import useServices from '../../hooks/useServices';
import Card from './Card/Card';
import CardInvert from './CardInvert/CardInvert';
import Service from './Service/Service';

const Home = () => {
	const [services] = useServices();
	return (
		<div>
			<Hero></Hero>
			<h1
				className="text-center text-3xl font-bold text-white py-10 bg-blue-30 uppercase"
				id="services"
			>
				Services
			</h1>
			<Switch>
				<Route path="/" exact>
					<div className="container mx-auto">
						{services.map((service, index) =>
							index % 2 ? (
								<CardInvert
									key={service.key}
									service={service}
								></CardInvert>
							) : (
								<Card
									key={service.key}
									service={service}
								></Card>
							)
						)}
					</div>
				</Route>
				<Route path="/home" exact>
					<div className="container mx-auto">
						{services.map((service, index) =>
							index % 2 ? (
								<CardInvert
									key={service.key}
									service={service}
								></CardInvert>
							) : (
								<Card
									key={service.key}
									service={service}
								></Card>
							)
						)}
					</div>
				</Route>
				<Route path="/home/:key">
					<Service services={services}></Service>
				</Route>
			</Switch>
		</div>
	);
};

export default Home;
