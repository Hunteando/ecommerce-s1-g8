import Title from './components/Title/Title';

import Style from './Login.module.css';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { validacionForm } from '../Formreg/validacion';

// Inicializando formulario

const initForm = {
	email: '',
	password: '',
};
// Funcion que establece los parámetros y logica de validacion de campos

const validacion = form => {
	const error = {};
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

	// Email
	if (!form.email.trim()) {
		error.email = 'Campo requerido';
	} else if (!regexEmail.test(form.email.trim())) {
		error.email = 'email invalido';
	}

	// Contraseña
	if (!form.password.trim()) {
		error.password = 'Campo requerido';
	}

	return error;
};

const styles = {
	fontWeight: 'bold',
	color: 'red',
};

const Login = () => {
	const { form, error, handleChange, handleBlur, handleSubmit } =
		validacionForm(initForm, validacion);

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit} className={Style.container}>
				<Title />
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
					type='password'
					placeholder='Contraseña'
					value={form.password}
					onChange={handleChange}
					onBlur={handleBlur}
					required
				/>
				{error.password && <p style={styles}>{error.password}</p>}

				<input className={Style.submit} type='submit' value='Enviar' />

				<div>
					<label htmlFor=''>¿Olvido su contraseña?</label>
				</div>
			</form>

			<Footer />
		</>
	);
};
export default Login;
