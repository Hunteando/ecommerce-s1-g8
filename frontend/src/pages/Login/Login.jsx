import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Label from './components/Label/Label';
import ButtonLogin from './components/Button/ButtonLogin';
import Style from './Login.module.css';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

const Login = () => {
	return (
		<>
			<Header />
			<section className={Style.container}>
				<Title />
				<div>
					<Label texto='Usuario' />
					<Input
						attribute={{
							id: 'usuario',
							name: 'usuario',
							type: 'texpat',
							placeholder: 'Ingrese su usuario',
						}}
					/>
				</div>
				<div>
					<Label texto='Contraseña' />
					<Input
						attribute={{
							id: 'contraseña',
							name: 'contraseña',
							type: 'password',
							placeholder: 'Ingrese su contraseña',
						}}
					/>
				</div>
				<div>
					<ButtonLogin />
				</div>
				<div>
					<Label texto='Recuperar contraseña' />
				</div>
			</section>
			<Footer />
		</>
	);
};
export default Login;
