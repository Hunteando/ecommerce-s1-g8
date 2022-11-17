import { Footer } from '../../components/Footer/Footer';
import style from './estilos.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


// 	const regexPassword =
// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
// 	// const regexTel = /^54[0-9]{10}$/;
// 	// const regexDni = /^[0-9]{8}$/;



// 	// Apellido
// 	if (!form.apellido.trim()) {
// 		error.apellido = 'Campo requerido';
// 	} else if (!regexName.test(form.apellido.trim())) {
// 		error.apellido = 'No se aceptan simbolos, solo letras';
// 	} else if (!regexNomAp.test(form.apellido.trim())) {
// 		error.apellido = 'Debe contener menos de 30 caracteres';
// 	}


// 	 // Direccion
// 	// if (!form.direccion.trim()) {
// 	//     error.direccion = "Campo requerido";
// 	// }

// 	// // DNI
// 	// if (!form.dni.trim()) {
// 	//     error.dni = "Campo requerido";
// 	// } else if (!regexDni.test(form.dni.trim())) {
// 	//     error.dni = "Debe contener solo numeros y 8 caracteres "
// 	// }

// 	// Fecha de nacimiento
// 	// function calcularEdad() {
// 	//     const d = form.fechaNac;
// 	//     const inDate = new Date(d);
// 	//     const anio = inDate.getFullYear();
// 	//     const fecActual = new Date();
// 	//     const fecAnio = fecActual.getFullYear();
// 	//     const edad = fecAnio - anio;
// 	//     if (edad < 18) {
// 	//         return true;
// 	//     } else {
// 	//         return false;
// 	//     }
// 	// }
// 	// if (!form.fechaNac.trim()) {
// 	//     error.fechaNac = "Campo requerido";
// 	// } else if (calcularEdad()) {
// 	//     error.fechaNac = "Debe ser mayor de edad"
// 	// }

// 	// // Teléfono
// 	// if (!form.telefono.trim()) {
// 	//     error.telefono = "Campo requerido";
// 	// } else if (!regexTel.test(form.telefono.trim())) {
// 	//     error.telefono = "Telefono invalido. Formato correcto: 54xxxxxxxxxx"
// 	// }


// };

// {/* <h4 className={style.h4}>DNI</h4>
//                 <input
//                     className={style.input}
//                     id="dni"
//                     name="dni"
//                     type="text"
//                     placeholder="DNI"
//                     value={form.dni}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                 />
//                 {error.dni && <p style={styles}>{error.dni}</p>}

//                 <h4 className={style.h4}>Fecha de nacimiento</h4>
//                 <input
//                     className={style.input}
//                     id="fechaNac"
//                     name="fechaNac"
//                     type="date"
//                     placeholder="Fecha de nacimiento"
//                     value={form.fechaNac}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                 />
//                 {error.fechaNac && <p style={styles}>{error.fechaNac}</p>}

//                 <h4 className={style.h4}>Teléfono</h4>
//                 <input
//                     className={style.input}
//                     id="telefono"
//                     name="telefono"
//                     type="text"
//                     placeholder="Telefono"
//                     value={form.telefono}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                 />
//                 {error.telefono && <p style={styles}>{error.telefono}</p>} */}


// {/* <h4 className={style.h4}>Dirección</h4>
//                 <input
//                     className={style.input}
//                     id="direccion"
//                     name="direccion"
//                     type="text"
//                     placeholder="Direccion"
//                     value={form.direccion}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     required
//                 />
//                 // {error.direccion && <p style={styles}>{error.direccion}</p>} */}

const formReg = () => {




	const handleSubmit = e => {
		e.preventDefault();
	}

	const [input, setInput] = useState({
		name: '',
		surname: '',
		email: '',
		password: '',
		cPassword: ''
	});

	const [showPassword, setShowPassword] = useState(false);
	const [psw, setPsw] = useState({});
	const [errors, setErrors] = useState({});

	function handleChange(e) {
		setInput(input => ({ ...input, [e.target.name]: e.target.value }));
	}

	const validationName = value => {
		const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
		const regexNomAp = /^.{2,30}$/;

		// Nombre
		if (!value) {
			setErrors({
				...errors,
				name: 'Campo requerido',
			});
		}
		else if (!regexName.test(value.trim())) {
			setErrors({
				...errors,
				name: 'No se aceptan simbolos ni numeros',
			});
		} else if (!regexNomAp.test(value.trim())) {
			setErrors({
				...errors,
				name: 'Debe contener menos de 30 caracteres',
			});
		} else setErrors({ ...errors, name: false });

	}

	const validationSurname = value => {
		const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
		const regexNomAp = /^.{2,30}$/;

		// Apellido
		if (!value) {
			setErrors({
				...errors,
				surname: 'Campo requerido',
			});
		}
		else if (!regexName.test(value.trim())) {
			setErrors({
				...errors,
				surname: 'No se aceptan simbolos ni numeros',
			});
		} else if (!regexNomAp.test(value.trim())) {
			setErrors({
				...errors,
				surname: 'Debe contener menos de 30 caracteres',
			});
		} else setErrors({ ...errors, surname: false });

	}


	// Email
	function validationEmail(value) {
		const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
		const regexEmailCount = /^.{2,50}$/;


		if (!value) {
			setErrors({
				...errors,
				email: 'Campo requerido',
			});
		} else if (!regexEmail.test(value.trim())) {
			setErrors({
				...errors,
				email: 'Email Inválido',
			});
		} else if (!regexEmailCount.test(value.trim())) {
			setErrors({
				...errors,
				email: 'Debe contener menos de 50 caracteres',
			});

		} else {
			setErrors({ ...errors, email: false });
		}
	}


	// Contraseña

	const validationPassword = value => {
		const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

		if (!value) {
			setErrors({
				...errors,
				password: 'Campo requerido',
			});
		} else if (!regexPassword.test(value.trim())) {
			setErrors({
				...errors,
				password: 'Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, No espacios en blanco, Al menos 1 caracter especial',
			});
		} else {
			setErrors({ ...errors, password: false });
			setPsw(value)
		}

	}

	// Confirmar contraseña

	const validationCPassword = value => {

		if (!value) {
			setErrors({
				...errors,
				cPassword: 'Campo requerido',
			});
		} else if (value.trim() !== psw) {
			setErrors({
				...errors,
				cPassword: 'Las contraseñas no coinciden',
			});
		} else {
			setErrors({ ...errors, cPassword: false })
		}
	}






	return (
		<>
			{/* // Formulario */}
			<form onSubmit={handleSubmit} className={style.form}>
				<h4 className={style.h4}>Nombre</h4>
				<input
					className={style.input}
					id='nombre'
					name='name'
					type='text'
					placeholder='Nombre'
					onBlur={e => {
						handleChange(e)
						validationName(e.target.value)
					}}
					required
				/>
				{errors.name ? <p>{errors.name}</p> : null}

				<h4 className={style.h4}>Apellido</h4>
				<input
					className={style.input}
					id='apellido'
					name='apellido'
					type='text'
					placeholder='Apellido'
					onBlur={e => {
						handleChange(e)
						validationSurname(e.target.value)
					}}
					required
				/>
				{errors.surname ? <p>{errors.surname}</p> : null}


				<h4 className={style.h4}>Email</h4>
				<input
					className={style.input}
					id='email'
					name='email'
					type='email'
					placeholder='Email'
					onBlur={e => {
						handleChange(e)
						validationEmail(e.target.value)
					}}
					required
				/>
				{errors.email ? <p>{errors.email}</p> : null}

				<h4 className={style.h4}>Contraseña</h4>
				<input
					className={style.input}
					id='password'
					name='password'
					type={showPassword ? 'text' : 'password'}
					placeholder='Contraseña'
					onBlur={e => {
						handleChange(e)
						validationPassword(e.target.value)
					}}
					required
				/>
				{errors.password ? <p>{errors.password}</p> : null}

				<label onClick={() => setShowPassword(!showPassword)}>
					Mostrar contraseña
				</label>


				<h4 className={style.h4}>Confirmar contraseña</h4>
				<input
					className={style.input}
					id='cPassword'
					name='cPassword'
					type={showPassword ? 'text' : 'password'}
					placeholder='Contraseña'
					onBlur={e => {
						handleChange(e)
						validationCPassword(e.target.value)
					}}
					required
				/>
				{errors.cPassword ? <p>{errors.cPassword}</p> : null}
				<label onClick={() => setShowPassword(!showPassword)}>
					Mostrar contraseña
				</label>


				<input className={style.submit} type='submit' value='Enviar' disabled={errors} />

				<div>
					<label htmlFor=''>
						¿Ya tienes una cuenta?
						<Link to='/login'>Iniciar sesion</Link>
					</label>
				</div>
			</form>

			<Footer />
		</>
	);
};
export default formReg;
