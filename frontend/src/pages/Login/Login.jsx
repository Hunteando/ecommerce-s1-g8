import { Link } from 'react-router-dom';
import Style from './Login.module.css';
import { Footer } from '../../components/Footer/Footer';

import { useValidation } from '../../hook/useValidation';
import { useState } from 'react';
// Inicializando formulario

const initForm = {
	email: '',
	password: '',
};
// Funcion que establece los parámetros y logica de validacion de campos

const validation = form => {
	const error = {};
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	const regexEmailCount = /^.{2,50}$/;
	const regexNomAp = /^.{2,30}$/;

	// Email
	if (!form.email.trim()) {
		error.email = 'Campo requerido';
	} else if (!regexEmail.test(form.email.trim())) {
		error.email = 'email invalido';
	} else if (!regexEmailCount.test(form.email.trim())) {
		error.email = 'Debe contener menos de 50 caracteres';
	}

	// Contraseña
	if (!form.password.trim()) {
		error.password = 'Campo requerido';
	} else if (!regexNomAp.test(form.password.trim())) {
		error.password = 'Debe contener menos de 30 caracteres';
	}

	return error;
};

const styles = {
	fontWeight: 'bold',
	color: 'red',
};

const Login = () => {
	const { form, error, handleChange, handleBlur, handleSubmit } = useValidation(
		initForm,
		validation
	);

	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<form onSubmit={handleSubmit} className={Style.container}>
				<h1>Iniciar sesion</h1>
				<h4 className={Style.h4}>Email</h4>
				<input
					className={Style.input}
					id='email'
					name='email'
					type='text'
					placeholder='Email'
					value={form.email}
					onChange={handleChange}
					onBlur={handleBlur}
					required
				/>
				{error.email && <p style={styles}>{error.email}</p>}
				<h4 className={Style.h4}>Contraseña</h4>
				<input
					className={Style.input}
					id='password'
					name='password'
					type={showPassword ? 'text' : 'password'}
					placeholder='Contraseña'
					value={form.password}
					onChange={handleChange}
					onBlur={handleBlur}
					required
				/>
				<label onClick={() => setShowPassword(!showPassword)}>
					Mostrar contraseña
				</label>
				{error.password && <p style={styles}>{error.password}</p>}

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
