import { useState } from "react";
import style from './styles.module.css';
import alert from '@sweetalert/with-react'

const RecoveryP = () => {




    const handleSubmit = e => {
        e.preventDefault();
        alert(
            <>
                <h2>Su contraseña se ha cambiado con éxito</h2>
            </>
        )
    }

    const [input, setInput] = useState({

        password: '',
        cPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [psw, setPsw] = useState({});
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setInput(input => ({ ...input, [e.target.name]: e.target.value }));
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


                <h4 className={style.h4}> Nueva Contraseña</h4>
                <input
                    className={style.input}
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Nueva Contraseña'
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


                <h4 className={style.h4}>Confirmar nueva contraseña</h4>
                <input
                    className={style.input}
                    id='cPassword'
                    name='cPassword'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Nueva Contraseña'
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


            </form>


        </>
    );
};
export default RecoveryP;

