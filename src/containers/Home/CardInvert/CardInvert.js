import React from 'react';

const CardInvert = ({ service }) => {
	const { img, title, subtitle, intro } = service;
	return (
		<div>
			<div className=" h-66">
				<div className="flex overflow-hidden h-72 text-right">
					<div className="w-1/2 p-4 pr-10 pt-5 lg:pt-10">
						<h1 className="text-bluegray-700 font-bold text-3xl">
							{title}
						</h1>
						<p className="mt-2 text-gray-600 text-xl">{subtitle}</p>
						<p className="mt-2 hidden md:block text-gray-500 text-sm lg:text-base ">
							{intro}
						</p>
						<button className="my-5 bg-brand-1 text-white text-sm font-normal px-3 md:px-5 py-2 lg:py-3 md:font-semibold">
							Explore Treatment & Care
						</button>
					</div>
					<div
						className="w-1/2 bg-cover"
						style={{
							backgroundImage: `url(${img})`,
							backgroundSize: 'cover',
							backgroundPosition: 'top',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default CardInvert;
