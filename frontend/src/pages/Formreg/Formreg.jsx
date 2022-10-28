import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"

// import { useState } from "react";
import { validacionForm } from "./validacion";

const initForm = {
    nombre: "",
    apellido: "",
    dni: "",
    fechaNac: "",
    telefono: "",
    email: "",
    direccion: "",
    password: "",
    cPassword: ""

}
const validacion = (form) => {
    const error = {};
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexNomAp = /^.{2,30}$/;

    if (!form.nombre.trim()) {
        error.nombre = "Campo requerido";
    } else if (!regexName.test(form.nombre.trim())) {
        error.nombre = "No se aceptan simbolos, solo letras"
    } else if (!regexNomAp.test(form.nombre.trim())) {
        error.nombre = "Debe contener menos de 30 caracteres"
    }


    if (!form.apellido.trim()) {
        error.apellido = "Campo requerido";
    } else if (!regexName.test(form.apellido.trim())) {
        error.apellido = "No se aceptan simbolos, solo letras"
    } else if (!regexNomAp.test(form.apellido.trim())) {
        error.apellido = "Debe contener menos de 30 caracteres"
    }


    if (!form.dni.trim()) {
        error.dni = "Campo requerido";
    }

    if (!form.fechaNac.trim()) {
        error.fechaNac = "Campo requerido";
    }

    if (!form.telefono.trim()) {
        error.telefono = "Campo requerido";
    }

    if (!form.email.trim()) {
        error.email = "Campo requerido";
    } else if (!regexEmail.test(form.email.trim())) {
        error.email = "email invalido"
    }

    if (!form.direccion.trim()) {
        error.direccion = "Campo requerido";
    }

    if (!form.password.trim()) {
        error.password = "Campo requerido";
    }

    if (!form.cPassword.trim()) {
        error.cPassword = "Campo requerido";
    }

    return error;
}

const formReg = () => {
    // const [nombre, setNombre] = useState('');
    // const [apellido, setApellido] = useState('');
    // const [dni, setDni] = useState('');
    // const [fechaNac, setFechaNac] = useState('');
    // const [telefono, setTelefono] = useState('');
    // const [email, setEmail] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [password, setPassword] = useState('');
    // const [cPassword, setCPassword] = useState('');

    const { form, error, handleChange, handleBlur, handleSubmit } = validacionForm(initForm, validacion);



    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <h4>Nombre</h4>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    value={form.nombre}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                />
                {error.nombre && <p>{error.nombre}</p>}

                <h4>Apellido</h4>
                <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    placeholder="Apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.apellido && <p>{error.apellido}</p>}
                <h4>DNI</h4>
                <input
                    id="dni"
                    name="dni"
                    type="text"
                    placeholder="DNI"
                    value={form.dni}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.dni && <p>{error.dni}</p>}
                <h4>Fecha de nacimiento</h4>
                <input
                    id="fechaNac"
                    name="fechaNac"
                    type="text"
                    placeholder="Fecha de nacimiento"
                    value={form.fechaNac}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.fechaNac && <p>{error.fechaNac}</p>}
                <h4>Telefono</h4>
                <input
                    id="telefono"
                    name="telefono"
                    type="text"
                    placeholder="Telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.telefono && <p>{error.telefono}</p>}

                <h4>Email</h4>
                <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.email && <p>{error.email}</p>}
                <h4>Direccion</h4>
                <input
                    id="direccion"
                    name="direccion"
                    type="text"
                    placeholder="Direccion"
                    value={form.direccion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.direccion && <p>{error.direccion}</p>}

                <h4>Contraseña</h4>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.password && <p>{error.password}</p>}

                <h4>Confirmar contraseña</h4>
                <input
                    id="cPassword"
                    name="cPassword"
                    type="text"
                    placeholder="Contraseña"
                    value={form.cPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {error.cPassword && <p>{error.cPassword}</p>}
                <input type="submit" value="enviar" />
            </form>

            <Footer />
        </>
    );
};
export default formReg;

