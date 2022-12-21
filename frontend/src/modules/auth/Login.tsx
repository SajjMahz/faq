import { Card, Title, TextInput, Grid, Button } from '@mantine/core';
import React, { useState } from 'react';

const Login = () => {
	const [name, setName] = useState<any>('');
	const [email, setEmail] = useState<any>('');

	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(name, email);
		setName('');
		setEmail('');
	};

	return (
		<>
			<Title align='center'>Login</Title>
			<Grid className='flex justify-center'>
				<Grid.Col md={4}>
					<Card shadow='sm' mt='lg' p='lg' radius='md' withBorder>
						<form onSubmit={handleSubmit}>
							<TextInput
								label='Name'
								placeholder='Name'
								value={name}
								onChange={e => setName(e.target.value)}
							/>
							<TextInput
								label='Email'
								placeholder='Email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
							<Button mt='sm' className='bg-blue-500 float-right' type='submit'>
								Login
							</Button>
						</form>
					</Card>
				</Grid.Col>
			</Grid>
		</>
	);
};

export default Login;
