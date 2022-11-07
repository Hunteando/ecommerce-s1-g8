// Hook personalizado para manejo de validaciones de formularios

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const validacionForm = (initForm, validarForm) => {
	const [form, setForm] = useState(initForm);
	const [error, setError] = useState({});
	// const [loading, setLoading] = useState(false);
	// const [enviar, setEnviar] = useState(null);

	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleBlur = e => {
		handleChange(e);
		setError(validarForm(form));
	};

	const handleSubmit = e => {
		e.preventDefault();
		navigate('/');
	};

	return {
		form,
		error,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
