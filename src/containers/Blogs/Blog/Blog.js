import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';

const Blog = ({ blogs }) => {
	const { key } = useParams();
	const selectedBlog = blogs.filter((service) => service.key === key);
	return (
		<div>
			{selectedBlog[0] && (
				<div className="mt-10">
					<div className="max-w-4xl px-10 py-6 mx-auto bg-white shadow-md">
						<div className="flex items-center justify-between">
							<span className="font-light text-gray-600">
								{selectedBlog[0].date}
							</span>

							<p className="px-2 py-1 font-semibold text-gray-100 bg-brand-1 rounded hover:bg-brand-3 text-sm">
								{selectedBlog[0].topic}
							</p>
						</div>
						<div className="mt-2">
							<img
								alt={selectedBlog[0].title}
								src={selectedBlog[0].img}
								className="my-10 rounded-lg"
							/>

							<p className="text-2xl font-bold text-gray-700 hover:underline">
								{selectedBlog[0].title}
							</p>

							<p className="mt-2 text-gray-600">
								{selectedBlog[0].description}
							</p>
						</div>
						<div className="flex items-center justify-between mt-4">
							<Link
								to={`/blogs`}
								className="  bg-blue-20 hover:bg-blue-30 text-white px-4 py-1 rounded-lg"
							>
								Go Back
							</Link>
							<div>
								<p className="flex items-center">
									<div className="text-blueGray-500 text-center inline-flex items-center justify-center w-8 h-8 mr-2 rounded-full bg-blue-10">
										<BiUserCircle className="text-blue-30 text-2xl" />
									</div>
									<h1 className="font-bold text-gray-700 hover:underline">
										{selectedBlog[0].user}
									</h1>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Blog;
