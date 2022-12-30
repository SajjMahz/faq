import { Card, Title,TextInput,	Grid, Button, PasswordInput } from '@mantine/core';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { callAxios } from '../../plugins/axios';
import { errorToast, successToast } from '../common/toast';

interface IUser {
	email: string;
	password: string;
}

const Login = () => {
	const [user, setUser] = useState<IUser>({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const getLogin = async (user: IUser) => {
		const res = await callAxios({
			url: 'login',
			method: 'POST',
			data: user,
		});
		const data = res?.data;
		if (data.token) {
			sessionStorage.setItem('USER_ACCESS_TOKEN', data.token);
			toast('Successfully login', successToast) && navigate('/');
		} else {
			toast('Login Failed', errorToast);
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		getLogin(user);
		setUser({ email: '', password: '' });
	};

	return (
		<Grid>
			<Grid.Col md={4} className='mx-auto'>
				<Title align='center'>Login</Title>
				<Card shadow='sm' mt='lg' p='lg' radius='md' withBorder>
					<form onSubmit={handleSubmit}>
						<TextInput
							label='Email'
							placeholder='Email'
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							required
						/>
						<PasswordInput
							label='Password'
							placeholder='Password'
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							required
						/>
						<Button mt='sm' className='bg-blue-500 float-right' type='submit'>
							Login
						</Button>
					</form>
					<div className='mt-4 hover:text-blue-500'>
						<Link to='/new-user'>Don't have an Account?</Link>
					</div>
				</Card>
			</Grid.Col>
		</Grid>
	);
};

export default Login;