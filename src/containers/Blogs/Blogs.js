import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import Blog from './Blog/Blog';
import { Switch, Route } from 'react-router-dom';
import Card from './Card/Card';

const Blogs = () => {
	const [blogs] = useBlogs();
	return (
		<div>
			<div className="px-6 py-8 bg-blue-10 min-h-screen">
				<div className="container flex justify-between mx-auto">
					<div className="w-full">
						<div className="flex max-w-4xl mx-auto">
							<h1 className="text-xl font-bold text-gray-700 md:text-3xl">
								Posts
							</h1>
						</div>
						<Switch>
							<Route path="/blogs" exact>
								{blogs.map((blog) => (
									<Card key={blog.key} blog={blog}></Card>
								))}
							</Route>
							<Route path="/blogs/:key">
								<Blog blogs={blogs}></Blog>
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
