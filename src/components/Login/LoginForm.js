import FormLabel from "./Form/FormLabel";
import FormInput from "./Form/FormInput";
import FormSend from "./Form/FormSend";
import FormCrear from "./Form/FormCrear";
import FormLblPass from "./Form/FormLblPass";

import LoginTitulo from "./LoginTitulo";

import LoginSocial from "./LoginSocial";

function LoginForm(){
    return (
        <form action="" class="fondo">
             <LoginTitulo id="" titulo="Iniciar Sesión" subtitulo="Inicie sesión para acceder a su cuenta y obtener mas descuentos.!"></LoginTitulo>
            <FormLabel lblfor="email" text="Correo electrónico:"></FormLabel>
            <FormInput type="email" name="email" id="email" placeholder="correo@gamingzone.com"></FormInput>
            <FormLabel lblfor="password" text="Contraseña:"></FormLabel>
            <FormInput type="password" name="password" id="password" placeholder="Contraseña"></FormInput>
            <FormLblPass></FormLblPass>
            <FormSend text="Aceptar"></FormSend>
            <FormCrear text="¿No tienes cuenta? " url="#" textlink=" Crear una"></FormCrear>
            <LoginSocial></LoginSocial>
        </form>
    );
}
export default LoginForm;