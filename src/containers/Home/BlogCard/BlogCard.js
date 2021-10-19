import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
	const { title, img } = blog;
	return (
		<div>
			<Link to="/blogs">
				<article
					className="relative w-96 h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out m-5"
					style={{
						backgroundImage: `url(${img})`,
					}}
				>
					<div className="absolute inset-0 bg-black bg-opacity-70 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
					<div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
						<h3 className="text-center">
							<p className="text-white text-2xl font-bold text-center">
								<span className="absolute inset-0"></span>
								{title}
							</p>
						</h3>
					</div>
				</article>
			</Link>
		</div>
	);
};

export default BlogCard;
