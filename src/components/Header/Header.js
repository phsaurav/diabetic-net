import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../../assets/logo_title.png';
import { NavLink } from 'react-router-dom';
import './Header.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<nav className="bg-blue-40 relative z-20">
				<div className="container mx-auto">
					<div className="bg-blue-40 text-black py-3 ">
						<div className="flex items-center justify-between">
							<NavLink to="/home">
								<img
									className="h-8 mb-2"
									src={logo}
									alt="logo"
								/>
							</NavLink>
							<div>
								{/* <!-- Header Icons --> */}
								<div className="hidden md:flex items-center space-x-10 uppercase">
									<NavLink
										to="/home"
										className="font-semibold text-white link link-underline link-underline-red"
										activeStyle={{
											color: '#CD4760',
										}}
									>
										Home
									</NavLink>
									<NavLink
										to="/blogs"
										className="font-semibold text-white link link-underline link-underline-red"
										activeStyle={{
											color: '#CD4760',
										}}
									>
										blogs
									</NavLink>
									<NavLink
										to="/about"
										className="font-semibold text-white link link-underline link-underline-red"
										activeStyle={{
											color: '#CD4760',
										}}
									>
										About us
									</NavLink>
									{user.displayName ? (
										<div className="flex items-center">
											<p className="font-semibold text-white link link-underline link-underline-red">
												{user.displayName.length > 8
													? user.displayName.split(
															' '
													  )[0]
													: user.displayName}
											</p>
											<button
												onClick={logOut}
												className="rounded-full text-white px-5 py-2 ml-10  transition duration-300 ease-in-outmr-8 bg-brand-1"
											>
												Sign Out
											</button>
										</div>
									) : (
										<div className="flex items-center">
											{' '}
											<NavLink
												to="/login"
												className="font-semibold text-white link link-underline link-underline-red"
												activeStyle={{
													color: '#CD4760',
												}}
											>
												Login
											</NavLink>
											<NavLink
												to="/register"
												className="rounded-full text-white px-5 py-2 ml-10  transition duration-300 ease-in-outmr-8 bg-brand-1"
											>
												Sign Up
											</NavLink>
										</div>
									)}
								</div>
							</div>
						</div>

						<div className="-mr-2 md:hidden flex absolute right-5 top-2">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-brand-1 inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-brand-1 hover:bg-white focus:outline-none "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden " id="mobile-menu">
							<div
								ref={ref}
								className="px-2 pt-2 pb-3 space-y-0 sm:px-3 text-center"
							>
								<NavLink
									to="/home"
									className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full"
								>
									Home
								</NavLink>
								<NavLink
									to="/blogs"
									className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full"
								>
									Blogs
								</NavLink>
								<NavLink
									to="/about"
									className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full"
								>
									About
								</NavLink>
								{user.displayName ? (
									<div className="flex items-center flex-col">
										<p className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full">
											{user.displayName}
										</p>
										<button
											onClick={logOut}
											className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full"
										>
											Sign Out
										</button>
									</div>
								) : (
									<div className="flex items-center flex-col">
										{' '}
										<NavLink
											to="/login"
											className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full"
										>
											Login
										</NavLink>
										<NavLink
											to="/register"
											className="font-semibold text-white hover:bg-brand-1 block px-3 py-2 rounded-md text-base w-full"
										>
											Sign Up
										</NavLink>
									</div>
								)}
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
};

export default Header;
