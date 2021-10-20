import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BsArrowReturnRight } from 'react-icons/bs';

const Service = ({ services }) => {
	const { key } = useParams();
	const selectedService = services.filter((service) => service.key === key);

	return (
		<div>
			<h1
				className="text-center text-3xl font-bold text-white py-10 bg-blue-30 uppercase"
				id="services"
			>
				{selectedService[0].title}
			</h1>
			{selectedService[0] && (
				<div className="container mx-auto ">
					<section className="relative pt-20  pb-36 ">
						<div className="items-center flex flex-wrap md:flex-nowrap justify-center relative">
							<div className="md:ml-auto px-4">
								<img
									alt="..."
									className="lg:w-full h-96 rounded-lg shadow-lg object-cover mt-10"
									src={selectedService[0].img}
								/>
							</div>
							<div className="w-full px-10 md:px-3 lg:w-8/12 md:mr-auto text-center md:text-left ">
								<div className="md:pr-12">
									<Link to="/home">
										<div className="text-blue-20 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-10 mt-8 mr-3">
											<IoMdArrowRoundBack className="text-3xl" />
										</div>
									</Link>
									<h3 className="text-bluegray-700 font-semibold text-3xl uppercase">
										{selectedService[0].title}
									</h3>
									<p className="lg:mt-2 text-gray-600 lg:text-xl text-lg">
										{selectedService[0].subtitle}
									</p>
									<p className="lg:mt-4 mt-1 text-sm leading-relaxed text-gray-600">
										{selectedService[0].description}
									</p>
									<div className="flex md:justify-between lg:w-10/12 flex-col lg:flex-row">
										<div className="flex justify-center md:justify-start mt-8 md:mt-0">
											<ul className="list-none lg:mt-6 ">
												<li className="py-2">
													<div className="flex items-center">
														<div>
															<span className=" flex justify-center items-center uppercase rounded-full text-blue-20  mr-3 text-center">
																<BsArrowReturnRight className="text-xl" />
															</span>
														</div>
														<div>
															<h4 className="text-blueGray-500">
																{
																	selectedService[0]
																		.one
																}
															</h4>
														</div>
													</div>
												</li>
												<li className="py-2">
													<div className="flex items-center">
														<div>
															<span className=" flex justify-center items-center uppercase rounded-full text-blue-20 mr-3 text-center">
																<BsArrowReturnRight className="text-xl" />
															</span>
														</div>
														<div>
															<h4 className="text-blueGray-500">
																{
																	selectedService[0]
																		.two
																}
															</h4>
														</div>
													</div>
												</li>
												<li className="py-2">
													<div className="flex items-center">
														<div>
															<span className=" flex justify-center items-center uppercase rounded-full text-blue-20  mr-3 text-center">
																<BsArrowReturnRight className="text-xl" />
															</span>
														</div>
														<div>
															<h4 className="text-blueGray-500">
																{
																	selectedService[0]
																		.three
																}
															</h4>
														</div>
													</div>
												</li>
											</ul>
										</div>
										<Link to={`/subscribe`}>
											<button className="my-5 bg-brand-1 hover:bg-brand-3 text-white text-sm font-normal px-6 md:px-6 py-2 md:font-semibold mr-5 lg:mr-20 lg:absolute lg:bottom-0 lg:r-20">
												Subscribe
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};

export default Service;
