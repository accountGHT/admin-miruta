import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import Layout1 from './layouts/Layout1';
import AuthLayout1 from './layouts/AuthLayout1';
import BlankLayout from './layouts/BlankLayout';

// Usar cookie David
import { useCookies } from 'react-cookie';

// REDUX David
import { connect } from 'react-redux';
import { setUsuario, setModulos } from './redux/actions/auth';
import { setDark } from './redux/actions/tema';

const App = (props) => {

    // Estado de redux
    const { setUsuario, setModulos, setDark } = props;
    const { modulos } = props.auth;

    // Buscar Cookie de usuario
    const [cookies, setCookie] = useCookies(['usuario', 'modulos', 'tema']);

    useEffect(() => {
        if (cookies.usuario != null) {
            setUsuario(cookies.usuario);
            setModulos(cookies.modulos);
        }
        // CARGANDO TEMA DARK
        if (cookies.tema != null) {
            setDark(cookies.tema.dark);
        } else {
            setCookie('tema', props.tema, { path: "/" });
        }
    }, [setUsuario, setModulos, setDark]);


    if (cookies.usuario == null) {
        // No hay usuarios
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={AuthLayout1} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );

    } else {
        // Si hay usuarios
        return (
            modulos === null ? null :
                <div className="App">
                    <Switch>
                        <Route path="/auth/:page" component={AuthLayout1} />
                        <Route path="/pages/:page" component={BlankLayout} />
                        <Route path="/dashboard3/:page" component={Layout1} />
                        <Route path="/dashboard4/:page" component={Layout1} />
                        <Route path="/" component={Layout1} />
                    </Switch>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth, tema } = state;
    return { auth, tema };
}

const mapDispatchToProps = {
    setUsuario,
    setModulos,
    setDark
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
