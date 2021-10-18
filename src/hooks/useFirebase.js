import { useEffect, useState } from 'react';
import initializeAuthentication from '../services/firebase/firebase.init';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [name, setName] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const auth = getAuth();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => setIsLoading(false));
	};

	const processLogin = () => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser).then((result) => {
			console.log(result);
		});
	};
	const setUserName = () => {
		updateProfile(auth.currentUser, { displayName: name }).then((res) => {
			console.log(res);
		});
	};
	const createNewUser = () => {
		console.log(email, password);
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				const user = res.user;
				console.log(user);
				setError('');
				verifyEmail();
				setUserName();
				setUser(user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		user,
		error,
		isLoading,
		setUser,
		setEmail,
		password,
		setPassword,
		setName,
		setError,
		setIsLoading,
		processLogin,
		logOut,
		signInUsingGoogle,
		createNewUser,
	};
};

export default useFirebase;
