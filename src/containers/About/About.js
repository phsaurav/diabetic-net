import React from 'react';
import Hero from '../../components/Hero/Hero';
import { BsArrowReturnRight } from 'react-icons/bs';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<Hero></Hero>
			<section className=" bg-blueGray-200  pb-20">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap">
						<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
								<div className="px-4 flex-auto"></div>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap items-center mt-16">
						<div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
							<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-10">
								<MdOutlineHealthAndSafety className="text-blue-30 text-4xl" />
							</div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal text-blue-40">
								About Us
							</h3>
							<p className="  leading-relaxed mt-4  text-bluegray-600">
								Vision: Life free of the burdens of diabetes.
							</p>
							<p className="  leading-relaxed mt-1  text-bluegray-600">
								Mission: To prevent and cure diabetes and to
								improve the lives of all people affected by
								diabetes.
							</p>
							<div className="flex justify-center md:justify-start mt-4 md:mt-0">
								<ul className="list-none lg:mt-6 ">
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className=" flex justify-center items-center uppercase rounded-full text-blue-20  mr-3 text-center">
													<BsArrowReturnRight className="text-xl" />
												</span>
											</div>
											<div>
												<h4 className="text-bluegray-500">
													We fund research to cure and
													manage diabetes.
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
												<h4 className="text-bluegray-500">
													We deliver services to
													hundreds of communities.
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
												<h4 className="text-bluegray-500">
													We provide objective and
													credible information.
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center mb-10 md:mb-5">
											<div>
												<span className=" flex justify-center items-center uppercase rounded-full text-blue-20  mr-3 text-center">
													<BsArrowReturnRight className="text-xl" />
												</span>
											</div>
											<div>
												<h4 className="text-bluegray-500">
													We provide a place where
													patient with diabetes can
													communicate and educate
													themselves.
												</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full md:w-6/12 lg:w-4/12 px-4 mr-auto ml-auto">
							<div className="relative flex flex-col min-w-0 break-words  w-full mb-2 shadow-lg  bg-brand-1">
								<div className="relative w-full flex flex-col">
									<img
										alt="..."
										src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
										className="h-52 object-cover align-middle"
									/>
									<svg
										preserveAspectRatio="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 583 95"
										className="absolute left-0 bottom-0 w-full block "
									>
										<polygon
											points="-30,95 583,95 583,65"
											className="text-brand-1 fill-current"
										></polygon>
									</svg>
								</div>
								<blockquote className="relative p-8 mb-4">
									<h4 className="text-xl font-bold text-white">
										Remember
									</h4>
									<p className="text-md font-light mt-2 text-white">
										When you learn to incorporate a routine
										into your life, you can keep doing all
										the things you loved to do before you
										had diabetes. So, take a deep breath and
										believe. You can do this!
									</p>
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="relative caontainer flex items-top justify-center pb-20 bg-white dark:bg-gray-900 sm:items-center sm:pt-0 ">
				<div className="max-w-screen mx-auto sm:px-6 lg:px-8 ">
					<div className="mt-4 overflow-hidden">
						<div className="grid grid-cols-1 md:grid-cols-2 w-full">
							<div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800">
								<h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
									Get in touch
								</h1>
								<p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
									Fill in the form to start a conversation
								</p>

								<div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
									<div className="ml-4 text-md tracking-wide font-semibold w-40">
										Coriarpar Road Dhanmondi, Dhaka
									</div>
								</div>

								<div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									<div className="ml-4 text-md tracking-wide font-semibold w-40">
										+44 1234567890
									</div>
								</div>

								<div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										viewBox="0 0 24 24"
										className="w-8 h-8 text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
									<div className="ml-4 text-md tracking-wide font-semibold w-40">
										info@diabeticnet.org
									</div>
								</div>
							</div>

							<form className="p-6 flex flex-col justify-center">
								<div className="flex flex-col">
									<label htmlFor="name" className="hidden">
										Full Name
									</label>
									<input
										type="name"
										name="name"
										id="name"
										placeholder="Full Name"
										className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
									/>
								</div>

								<div className="flex flex-col mt-2">
									<label htmlFor="email" className="hidden">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										placeholder="Email"
										className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
									/>
								</div>

								<div className="flex flex-col mt-2">
									<label htmlFor="tel" className="hidden">
										Number
									</label>
									<input
										type="tel"
										name="tel"
										id="tel"
										placeholder="Telephone Number"
										className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
									/>
								</div>

								<Link to="/home">
									<button
										type="submit"
										className="md:w-32 bg-brand-1 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-brand-3 transition ease-in-out duration-300"
									>
										Submit
									</button>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
