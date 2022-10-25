import Title from './components/Title/Title';
import Input from './components/Input/Input';
import Label from './components/Label/Label';
import ButtonLogin from './components/Button/ButtonLogin'

const Login = () => {
    return (
        <>
            <Title />
            <div>
                <Label texto="Usuario" />
                <Input />
            </div>
            <div>
                <Label texto="Contraseña" />
                <Input />
            </div>
            <div>
                <ButtonLogin />
            </div>
            <div>
                <Label />
            </div>
        </>
    );
}
export default Login;