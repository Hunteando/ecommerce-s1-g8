import { useState } from "react";
import style from './styles.module.css';
import alert from '@sweetalert/with-react'





const mailRecovery = () => {




    const handleSubmit = e => {
        e.preventDefault();
        alert(
            <>
                <h2>Email Enviado</h2>
                <h2>Revise su bandeja de entrada</h2>
            </>
        )
    }

    const [input, setInput] = useState({

        email: '',

    });


    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setInput(input => ({ ...input, [e.target.name]: e.target.value }));
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





    return (
        <>
            {/* // Formulario */}
            <form onSubmit={handleSubmit} className={style.form}>

                <h4 className={style.h4}>Ingrese el Email con el cual se ha registrado</h4>
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



                <input className={style.submit} type='submit' value='Enviar' disabled={errors} />


            </form>


        </>
    );
};
export default mailRecovery;
