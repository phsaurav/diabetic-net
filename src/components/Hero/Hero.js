import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { HashLink } from 'react-router-hash-link';
import { BsArrowRight } from 'react-icons/bs';
import './Hero.css';

const contents = [
	{
		key: 2,
		img: '/assets/covers/cover_2.jpg',
	},
	{
		key: 3,
		img: '/assets/covers/cover-3.jpg',
	},
	{
		key: 5,
		img: '/assets/covers/cover-5.jpg',
	},
	{
		key: 6,
		img: '/assets/covers/cover-6.jpg',
	},
];

const Hero = () => {
	return (
		<div>
			<Slider
				autoplay="7000"
				infinite="true"
				classNames="buttonDisabled previousButton disabled "
				className="slider-wrapper"
			>
				{contents.map((content) => (
					<div
						className="absolute top-0 w-full"
						key={content.key}
						style={{
							backgroundImage: `url(${content.img})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							height: '555px',
						}}
					></div>
				))}
			</Slider>
			<div>
				<span
					id="blackOverlay"
					className="w-full absolute bg-center opacity-30 bg-black top-0"
					style={{ height: '564px' }}
				></span>
			</div>
			<div className="w-3/6 ml-5 md:ml-28 lg:ml-40 xl:ml-72 absolute top-28 mx-auto">
				<p className="text-white text-3xl md:text-2xl w-96">
					Diabatic Net is a network for patient with diabetes to help
					them in leading a healhty life
				</p>
				<HashLink
					to="#services"
					className="bg-bluegray-700 bg-opacity-50 text-white flex items-center text-xl w-64 pl-1 rounded-full pt-2 pb-3 justify-center mt-5"
				>
					Explore Our Services{' '}
					<BsArrowRight className="text-3xl ml-2 pt-1" />
				</HashLink>
			</div>
			<div
				className="absolute text-white hidden md:block  md:text-9xl mt-16 lg:m-0 lg:text-10xl ml-5 font-semibold"
				style={{ top: '220px' }}
			>
				<h1>diabetes</h1>
			</div>
		</div>
	);
};

export default Hero;
