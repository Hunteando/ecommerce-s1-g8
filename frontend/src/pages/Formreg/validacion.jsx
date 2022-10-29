import { useState } from "react";

export const validacionForm = (initForm, validarForm) => {
    const [form, setForm] = useState(initForm);
    const [error, setError] = useState({});
    // const [loading, setLoading] = useState(false);
    // const [enviar, setEnviar] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    };

    const handleBlur = (e) => {
        handleChange(e);
        setError(validarForm(form));
    };

    const handleSubmit = (e) => { };

    return {
        form, error, handleChange, handleBlur, handleSubmit
    }
}