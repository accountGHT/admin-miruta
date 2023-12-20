import React, { useState } from 'react';
import axios from 'axios';
import { backend } from '../../../config/backend'

// Usar cookie David
import { useCookies } from 'react-cookie';

// REDUX David
import { connect } from 'react-redux';
import { setUsuario, setModulos } from '../../../redux/actions/auth';

const Ingresar = (props) => {

    // Cookies
    const [cookies, setCookie] = useCookies(['usuario', 'modulos']);
    const [botoncito, setBotoncito] = useState(false);

    return (
        <button className="btn btn-primary float-right" onClick={() => enviar({ ...props, cookies, setCookie, setBotoncito })} disabled={botoncito}>Ingresar</button>
    );
}

// Enviar datos al servidor David
const enviar = async (props) => {

    // Estado de redux
    const { setUsuario, setModulos, cookies, setCookie, setBotoncito } = props;

    const { email, pass } = props;

    if (email.current.value.trim() !== "" && pass.current.value.trim() !== "") {

        // console.log(email.current.value, "usuario");
        // console.log(pass.current.value, "contraseña");
        setBotoncito(true);

        const data = new FormData();
        data.append('usuario', email.current.value);
        data.append('clave', pass.current.value);
        try {
            const respuesta = await axios.post(backend + 'login', data);
            console.log(respuesta);

            if (respuesta.data.codigo === "200") {

                setCookie('usuario', respuesta.data.data.empleado, { path: "/" });
                setCookie('modulos', respuesta.data.data.modulo, { path: "/" });
                setUsuario(respuesta.data.data.empleado);
                setModulos(respuesta.data.data.modulo);
            } else {
                alert(respuesta.data.message);
                setBotoncito(false);
            }
        } catch (error) {
            alert("Sin respuesta del servidor, por favor vuelva a intentar");
        }

    }

}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
}

const mapDispatchToProps = {
    setUsuario,
    setModulos,
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingresar);