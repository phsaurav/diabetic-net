import React from 'react';
import Hero from '../../components/Hero/Hero';
import Card from './Card/Card';
import CardInvert from './CardInvert/CardInvert';

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<h1
				className="text-center text-3xl font-bold text-white py-10 bg-blue-30 uppercase"
				id="services"
			>
				Services
			</h1>
			<div className="container mx-auto">
				<Card></Card>
				<CardInvert></CardInvert>
			</div>
		</div>
	);
};

export default Home;
