import { Link } from 'react-router-dom';
import Style from './Login.module.css';
import { Footer } from '../../components/Footer/Footer';
import { useState } from 'react';
import alert from '@sweetalert/with-react'

// // Funcion que establece los parámetros y logica de validacion de campos
const submitHandler = e => {
	e.preventDefault();

	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	const regexEmailCount = /^.{2,50}$/;
	const regexNomAp = /^.{2,30}$/;

	// Email
	if (e.target.email.value === '') {
		alert(
			<h2>Email requerido</h2>
		);
		return;
	} else if (!regexEmail.test(e.target.email.value)) {
		alert(
			<h2>Email Invalido</h2>
		);
		return;
	} else if (!regexEmailCount.test(e.target.email.value)) {
		alert(
			<h2>Debe contener menos de 50 caracteres</h2>
		);
		return;
	}

	// Contraseña
	if (!e.target.password.value) {

		alert(
			<h2>Contraseña requerida</h2>
		);
		return;
	}


};



const Login = () => {

	const [showPassword, setShowPassword] = useState(false);

	return (
		<>

			<form onSubmit={submitHandler} className={Style.container}>
				<h1>Iniciar sesion</h1>
				<h4 className={Style.h4}>Email</h4>
				<input
					className={Style.input}
					id='email'
					name='email'
					type='email'
					placeholder='Email'


				/>

				<h4 className={Style.h4}>Contraseña</h4>
				<input
					className={Style.input}
					id='password'
					name='password'
					type={showPassword ? 'text' : 'password'}
					placeholder='Contraseña'


				/>
				<label onClick={() => setShowPassword(!showPassword)}>
					Mostrar contraseña
				</label>


				<input className={Style.submit} type='submit' value='Enviar' />

				<label htmlFor=''>¿Olvido su contraseña?</label>
				<br />
				<label htmlFor=''>
					¿No tienes una cuenta?
					<br />
					<Link to='/signup'>Registrar aquí</Link>
				</label>
			</form>

			<Footer />
		</>
	);
};
export default Login;
