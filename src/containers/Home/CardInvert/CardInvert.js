import React from 'react';

const CardInvert = () => {
	return (
		<div>
			<div className=" h-66">
				<div className="flex overflow-hidden h-72">
					<div className="w-1/2 p-4 pl-10 pt-10">
						<h1 className="text-bluegray-700 font-bold text-3xl">
							Type 1 Diabetes
						</h1>
						<p className="mt-2 text-gray-600 text-2xl">
							Let’s fight type 1 diabetes together.
						</p>
						<p className="mt-2 text-gray-500 ">
							No matter how type 1 diabetes has shown up in your
							life, you can find success by balancing your
							medications, and sticking to your daily exercise
							routine and nutrition plan.
						</p>
						<button className="my-5 bg-brand-1 text-white px-5 py-3 font-semibold">
							Explore Treatment & Care
						</button>
					</div>
					<div
						className="w-1/2 bg-cover"
						style={{
							backgroundImage: `url('https://www.diabetes.org/sites/default/files/styles/hero_level2_widescreen/public/2021-01/ADA_L2_Type1-Overview-min.jpg?h=0c4cd294')`,
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
