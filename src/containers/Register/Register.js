import React, { useState } from 'react';
import logo from '../../assets/logo_dark.png';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useLocation, useHistory } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const {
		setError,
		error,
		createNewUser,
		setEmail,
		setPassword,
		setName,
		setUser,
		setIsLoading,
		password,
		signInUsingGoogle,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/login';

	const [rePass, setRePass] = useState('');

	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((res) => {
				setUser(res.user);
				history.push(redirect_uri);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	const handleSignUp = (e) => {
		e.preventDefault();

		if (password.length <= 6) {
			setError('Password Must be atleast 6 character long');
			return;
		}
		if (!/^(?=.*[0-9])/.test(password)) {
			setError('Password Must have one nubmer!');
			return;
		}
		if (password !== rePass) {
			setError("Password Doesn't match!!");
			return;
		}
		setError('');

		createNewUser();
		history.push(redirect_uri);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handleRePassChange = (e) => {
		setRePass(e.target.value);
	};
	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	return (
		<div className="w-full h-full fixed block top-0 left-0 bg-white  z-30">
			<Link to="/home">
				<button
					type="button"
					className="bg-white rounded-md p-2 inline-flex items-center justify-center  fixed top-0 right-0 hover:text-brand-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset  text-2xl focus:ring-indigo-500"
					style={{ color: '#ff2f59' }}
				>
					<MdClose></MdClose>
				</button>
			</Link>
			<div className="flex flex-col justify-center items-center h-screen">
				<img src={logo} alt="Logo" style={{ height: '51px' }} />

				<form className="mt-4 " onSubmit={handleSignUp}>
					<input
						type="text"
						placeholder="Name"
						onBlur={handleNameChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="text"
						placeholder="Email"
						onBlur={handleEmailChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="password"
						placeholder="Password"
						onBlur={handlePasswordChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						onBlur={handleRePassChange}
						className="text-sm w-80 bg-gray-100 flex flex-row justify-between h-12 pl-5 rounded-lg my-5"
						style={{ outline: 'none' }}
					/>
					<button className="text-white py-2 px-7 w-80 rounded-md bg-brand-1">
						Sign Up
					</button>
					<br />
					<Link to="/login">
						<p className="text-center py-3 font-semibold text-brand-1">
							Already have an account
						</p>
					</Link>
					<p className="text-center py-3 font-semibold text-brand-1">
						{error}
					</p>
				</form>
				<hr className="border-0 w-80 bg-bluegray-300 text-gray-500 h-px"></hr>
				<div className="flex justify-center mb-44">
					<button
						onClick={handleGoogleSignIn}
						className="rounded-full bg-brand-1 text-white text-2xl p-2 mt-5 hover:bg-white  border-white hover:border-brand-1 border-2 hover:text-brand-1"
					>
						<BsGoogle />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
