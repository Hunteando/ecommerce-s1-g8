import { Footer } from '../../components/Footer/Footer';
import style from './estilos.module.css';
import { useState } from 'react';





const formReg = () => {




    const handleSubmit = e => {
        e.preventDefault();
    }

    const [input, setInput] = useState({
        addres: '',
        dni: '',
        date: '',
        phone: '',

    });


    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setInput(input => ({ ...input, [e.target.name]: e.target.value }));
    }

    const validationAddres = value => {


        // Nombre
        if (!value) {
            setErrors({
                ...errors,
                addres: 'Campo requerido',
            });
        }


    }

    const validationDni = value => {

        const regexDni = '^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$'

        // Dni
        if (!value) {
            setErrors({
                ...errors,
                dni: 'Campo requerido',
            });
        }
        else if (!regexDni.test(value.trim())) {
            setErrors({
                ...errors,
                dni: 'Mínimo 1 millon, máximo 999 millones',
            });
        } else setErrors({ ...errors, dni: false });

    }


    // Edad
    function validationDate(value) {

        const d = value;
        const inDate = new Date(d);
        const anio = inDate.getFullYear();
        const fecActual = new Date();
        const fecAnio = fecActual.getFullYear();
        const edad = fecAnio - anio;
        // if (edad < 18) {
        //     return true;
        //  } else {
        //      return false;
        //  }


        if (!value) {
            setErrors({
                ...errors,
                date: 'Campo requerido',
            });
        } else if (edad < 18) {
            setErrors({
                ...errors,
                date: 'Debe ser mayor de edad',
            });
        } else {
            setErrors({ ...errors, date: false });
        }
    }


    const validationPhone = value => {

        const regexPhone = '/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/D'

        // Telefono
        if (!value) {
            setErrors({
                ...errors,
                phone: 'Campo requerido',
            });
        }
        else if (!regexPhone.test(value.trim())) {
            setErrors({
                ...errors,
                phone: 'Mínimo 1 millon, máximo 999 millones',
            });
        } else setErrors({ ...errors, phone: false });

    }









    return (
        <>
            {/* // Formulario */}
            <form onSubmit={handleSubmit} className={style.form}>
                <h4 className={style.h4}>Dirección</h4>
                <input
                    className={style.input}
                    id='addres'
                    name='addres'
                    type='text'
                    placeholder='Dirección'
                    onBlur={e => {
                        handleChange(e)
                        validationAddres(e.target.value)
                    }}
                    required
                />
                {errors.addres ? <p>{errors.addres}</p> : null}

                <h4 className={style.h4}>Apellido</h4>
                <input
                    className={style.input}
                    id='dni'
                    name='dni'
                    type='text'
                    placeholder='Apellido'
                    onBlur={e => {
                        handleChange(e)
                        validationDni(e.target.value)
                    }}
                    required
                />
                {errors.dni ? <p>{errors.dni}</p> : null}


                <h4 className={style.h4}>Fecha de nacimiento</h4>
                <input
                    className={style.input}
                    id='date'
                    name='date'
                    type='date'
                    placeholder='Fecha de nacimiento'
                    onBlur={e => {
                        handleChange(e)
                        validationDate(e.target.value)
                    }}
                    required
                />
                {errors.date ? <p>{errors.date}</p> : null}



                <h4 className={style.h4}>Teléfono</h4>
                <input
                    className={style.input}
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='Teléfono'
                    onBlur={e => {
                        handleChange(e)
                        validationPhone(e.target.value)
                    }}
                    required
                />
                {errors.phone ? <p>{errors.phone}</p> : null}


                <input className={style.submit} type='submit' value='Enviar' disabled={errors} />


            </form>

            <Footer />
        </>
    );
};
export default formReg;