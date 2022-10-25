import Input from "../Login/components/Input/Input";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header"

const Formreg = () => {
    return (
        <>
            <Header />
            <div>
                <h1>Formulario de registro</h1>
            </div>
            <div>
                <h4>Nombre</h4>
                <Input attribute={{
                    id: 'nombre',
                    name: 'nombre',
                    type: 'text',
                    placeholder: 'Nombre'
                }} />
                <h4>Apellido</h4>
                <Input attribute={{
                    id: 'apellido',
                    name: 'apellido',
                    type: 'text',
                    placeholder: 'Apellido'
                }} />
                <h4>DNI</h4>
                <Input attribute={{
                    id: 'dni',
                    name: 'dni',
                    type: 'text',
                    placeholder: 'DNI'
                }} />
                <h4>Fecha de nacimiento</h4>
                <Input attribute={{
                    id: 'fechanac',
                    name: 'fechanac',
                    type: 'text',
                    placeholder: 'Fecha de nacimiento'
                }} />
                <h4>E-mail</h4>
                <Input attribute={{
                    id: 'email',
                    name: 'email',
                    type: 'text',
                    placeholder: 'E-mail'
                }} />
                <h4>Dirección para la entrega</h4>
                <Input attribute={{
                    id: 'direccion',
                    name: 'direccion',
                    type: 'text',
                    placeholder: 'Dirección'
                }} />
            </div>
            <Footer />
        </>
    )
}
export default Formreg;
