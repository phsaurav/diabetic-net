import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Hero from '../../components/Hero/Hero';
import useServices from '../../hooks/useServices';
import Card from './Card/Card';
import CardInvert from './CardInvert/CardInvert';
import Service from './Service/Service';
import BlogCard from './BlogCard/BlogCard';
import useBlogs from '../../hooks/useBlogs';

const Home = () => {
	const [services] = useServices();
	const [blogs] = useBlogs();
	const newBlogs = blogs.length ? blogs.slice(0, 3) : [];
	console.log(newBlogs);
	return (
		<div>
			<Hero></Hero>

			<Switch>
				<Route path="/" exact>
					<h1
						className="text-center text-3xl font-bold text-white py-10 bg-blue-30 uppercase"
						id="services"
					>
						Services
					</h1>
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
					<div className="flex flex-col justify-center items-center">
						<h1
							className="text-center text-3xl font-bold text-blue-40 mt-20 py-5  uppercase"
							id="services"
						>
							Blogs
						</h1>
						<hr className="border-0 w-3/6 bg-bluegray-300 text-gray-500 h-px"></hr>
					</div>
					<section className=" mx-auto px-4 sm:px-6 lg:px-4 mb-12">
						<article>
							<section className=" flex mt-6 flex-wrap mx-auto justify-center">
								{newBlogs.map((blog) => (
									<BlogCard
										key={blog.key}
										blog={blog}
									></BlogCard>
								))}
							</section>
						</article>
					</section>
					<div
						className="w-screen  bg-gray-500  bg-no-repeat"
						style={{
							backgroundBlendMode: 'multiply',
							backgroundSize: 'cover',
							backgroundPosition: 'bottom',
							backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/injection-with-insulin-pen-royalty-free-image-1634308512.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*')`,
							width: '100%',
						}}
					>
						<div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
							<div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
								Affordable Resources and Service for you
							</div>
							<Link to="/about">
								<div className=" mt-3  flex  flex-row justify-center">
									<button
										className=" p-2  w-40  bg-indigo-400  rounded-lg  text-white hover:bg-indigo-300"
										type="button"
									>
										Learn More
									</button>
								</div>
							</Link>
						</div>
					</div>
				</Route>
				<Route path="/home" exact>
					<h1
						className="text-center text-3xl font-bold text-white py-10 bg-blue-30 uppercase"
						id="services"
					>
						Services
					</h1>
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
					<div className="flex flex-col justify-center items-center">
						<h1
							className="text-center text-3xl font-bold text-blue-40 mt-20 py-5  uppercase"
							id="services"
						>
							Blogs
						</h1>
						<hr className="border-0 w-3/6 bg-bluegray-300 text-gray-500 h-px"></hr>
					</div>
					<section className=" mx-auto px-4 sm:px-6 lg:px-4 mb-12">
						<article>
							<section className=" flex mt-6 flex-wrap mx-auto justify-center">
								{newBlogs.map((blog) => (
									<BlogCard
										key={blog.key}
										blog={blog}
									></BlogCard>
								))}
							</section>
						</article>
					</section>
					<div
						className="w-screen  bg-gray-500  bg-no-repeat"
						style={{
							backgroundBlendMode: 'multiply',
							backgroundSize: 'cover',
							backgroundPosition: 'bottom',
							backgroundImage: `url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/injection-with-insulin-pen-royalty-free-image-1634308512.jpg?crop=1.00xw:0.752xh;0,0&resize=1200:*')`,
							width: '100%',
						}}
					>
						<div className=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
							<div className=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
								Affordable Resources and Service for you
							</div>
							<Link to="/about">
								<div className=" mt-3  flex  flex-row justify-center">
									<button
										className=" p-2  w-40  bg-indigo-400  rounded-lg  text-white hover:bg-indigo-300"
										type="button"
									>
										Learn More
									</button>
								</div>
							</Link>
						</div>
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
