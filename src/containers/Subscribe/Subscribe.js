import React from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
	return (
		<div>
			<div className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
				<div
					v-if="modal.visible"
					className="h-screen w-full absolute flex items-center justify-center bg-modal mb-40"
				>
					<div className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center ">
						<h1
							className="text-center text-3xl font-bold text-blue-40 py-5  uppercase"
							id="services"
						>
							Thanks for Subscribing
						</h1>
						<Link to="/home">
							<div className=" mt-3  flex  flex-row justify-center">
								<button
									className=" p-2  w-40  bg-brand-1  rounded-lg  text-white hover:bg-indigo-300"
									type="button"
								>
									Go Back
								</button>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Subscribe;
