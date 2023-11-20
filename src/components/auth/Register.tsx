import React, {useState} from 'react';
import {FaGoogle, FaGithub} from 'react-icons/fa';

interface AuthenticationProps {
	showLogin: Function,
}

const Register: React.FC<AuthenticationProps> = ({showLogin}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [Cpassword, setCPassword] = useState('');

	// Placeholder function to handle form submission
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
			<div className='flex flex-col md:flex-row gap-4 bg-default-secondary-2 shadow-md rounded p-8 m-0 mt-8 sm:m-8'>
				<form
					onSubmit={handleSubmit}
					className='flex-1'
				>
					<div className="mb-4">
						<label className="block text-default-white text-sm font-bold mb-2" htmlFor="email">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-default-white text-sm font-bold mb-2" htmlFor="password">
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block text-default-white text-sm font-bold mb-2" htmlFor="password">
							Confirm Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="cpassword"
							type="password"
							placeholder="Confirm your password"
							value={Cpassword}
							onChange={(e) => setCPassword(e.target.value)}
							required
						/>
					</div>
					<div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
						<button
							className="whitespace-nowrap bg-default-secondary hover:bg-default-secondary-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Register
						</button>
						<div className='text-sm whitespace-nowrap mx-auto flex flex-col gap-1 items-center'>
						Already have an account? 
						<button
							className="bg-default-secondary-2 hover:bg-default-secondary-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="button"
							onClick={() => showLogin()}
						>
							Login
						</button>
						</div>
					</div>
				</form>
				<div className='flex flex-col items-center gap-4 mt-6'>
					<button className="flex flex-row justify-center bg-default-secondary hover:bg-default-secondary-3 p-4 items-center gap-2 whitespace-nowrap " onClick={() => console.log("google")}>
						<FaGoogle className="text-2xl" />
						Login with Google
					</button>
					<button className="flex flex-row justify-center bg-default-secondary hover:bg-default-secondary-3 p-4 items-center gap-2 whitespace-nowrap " onClick={() => console.log("google")}>
						<FaGithub className="text-2xl" />
						Login with Github
					</button>
				</div>
			</div>
	);
};

export default Register;
