/* eslint-disable default-case */
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import for the page assets...
/*import { index } from "../../config/pluginsInit";*/
import "../../assets/scss/style.scss";
import "../../assets/css/style.css";

// Import Custom components...
import {
  Loader,
  SideBarStyle1,
  NavBarStyle1,
  FooterStyle1,
} from "../../components/sofbox";
import Home from "../../views/Home";

import { Switch, Route, Redirect } from "react-router-dom";

// Import JSON Data...
import sideBarItems from "../../data/sideBar";
import mantenimiento from "../../data/mantenimiento.json";
import gestion from "../../data/gestion.json";
import funcionalidad from "../../data/funcionalidad.json";
import historial from "../../data/historial.json";
/*import Loading from "react-loading-bar";*/

// Import Map Pages
import { Collapse } from "reactstrap";
import { connect } from "react-redux";

import { useCookies } from "react-cookie";
import { setModulos, setUsuario } from "../../redux/actions/auth";
import { setDark } from "../../redux/actions/tema";

// import de juber
import Administrador from "../../views/Mantenimiento/Administrador";
import Clientes from "../../views/Mantenimiento/Clientes";
import ChofListar from "../../views/Mantenimiento/Choferes/ListarChofer";
import ChofRechazados from "../../views/Mantenimiento/Choferes/ChoferesRechazados";
import ChofPendientes from "../../views/Mantenimiento/Choferes/ChoferesPendientes";
import RecargasAprobadas from "../../views/Mantenimiento/Recargas/RecargasAprobadas";
import RecargasRechazadas from "../../views/Mantenimiento/Recargas/RecargasRechazadas";
import RecargasPendientes from "../../views/Mantenimiento/Recargas/RecargasPendientes";
import MarcaModelo from "../../views/Mantenimiento/Vehiculos/MarcaModelo";
import Comision from "../../views/Gestion/Comision";
import Funcionalidades from "../../views/Funcionalidad";
import HistorialRecargas from "../../views/Historial/HistRecargas";
import HistorialViajesChofer from "../../views/Historial/HistViajesChofer";
import HistorialViajesCliente from "../../views/Historial/HistViajesClientes";
import MensajeriaGlobal from "../../views/Mensajeria";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          text: "Dashboard",
          href: "/dashboard1/home",
        },
        {
          text: "Home",
          active: true,
        },
      ],
      footerItems: [
        // {
        //     title: "Privacy Policy",
        //     href: "/",
        // },
        // {
        //     title: "Terms of Use",
        //     href: "/",
        // }
      ],
      footerTitle: "Copyright 2021 Brufat todos los derechos reservados.",
      collapsed: false,
    };
  }
  componentDidMount() {}

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  //
  agregarMenu(itemAgregar, modulos, listaInicial) {
    // let moduloActivo = false;
    const listaFinal = [...listaInicial];

    const listaTemporal = [];
    itemAgregar.forEach((element, number) => {
      if (number !== 0) {
        modulos.forEach((element1) => {
          if (element.name === element1.nombre) {
            // moduloActivo = true;
            listaTemporal.push(element);
          }
        });
      }
    });
    if (listaTemporal.length !== 0) {
      listaFinal.push(itemAgregar[0]);
      listaFinal.push(...listaTemporal);
    }
    return listaFinal;
  }

  generarRutasPermitidas() {
    const modulos = this.props.auth.modulos;
    const rutas = [];
    modulos.forEach((element) => {
      switch (element.nombre) {
        case "mantCliente":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantClientes/Clientes"
              component={Clientes}
            />
          );
          break;
        case "mantChofer":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantChofer/Chofer"
              component={ChofListar}
            />
          );
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantChofer/ChofRechazados"
              component={ChofRechazados}
            />
          );
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantChofer/ChofPendientes"
              component={ChofPendientes}
            />
          );
          break;
        case "mantRecargas":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantRecargas/RecargasAprobadas"
              component={RecargasAprobadas}
            />
          );
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantRecargas/RecargasRechazadas"
              component={RecargasRechazadas}
            />
          );
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantRecargas/RecargasPendientes"
              component={RecargasPendientes}
            />
          );
          break;
        case "mantAdmin":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantAdministrador/Administrador"
              component={Administrador}
            />
          );
          break;
        case "mantVehiculos":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Mantenimiento/MantVehiculos/MarcaModelo"
              component={MarcaModelo}
            />
          );
          break;
        case "mantComision":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Gestion/MantComision/Comision"
              component={Comision}
            />
          );
          break;
        case "mantFuncionalidad":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Gestion/mantFuncionalidad/Funcionalidad"
              component={Funcionalidades}
            />
          );
          break;
        case "mensajeria":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Gestion/mensajeria/Global"
              component={MensajeriaGlobal}
            />
          );
          break;
        case "mantHistorial":
          rutas.push(
            <Route
              key={element.nombre}
              path="/Historial/MantHistorial/HistorialRecargas"
              component={HistorialRecargas}
            />
          );
          rutas.push(
            <Route
              key={element.nombre}
              path="/Historial/MantHistorial/HistorialViajesChofer"
              component={HistorialViajesChofer}
            />
          );
          rutas.push(
            <Route
              key={element.nombre}
              path="/Historial/MantHistorial/HistorialViajesClientes"
              component={HistorialViajesCliente}
            />
          );
          break;
      }
    });
    const home = "home";
    const redi = "redi";
    rutas.push(<Route key={home} exact path="/" exect component={Home} />);
    rutas.push(<Redirect key={redi} to="/" />);
    return rutas;
  }

  render() {
    const { items, footerItems, footerTitle, collapsed } = this.state;

    // DATOS USUARIOS
    const datosUsuario = this.props.auth;

    // VALIDAR MODULOS
    const modulos = this.props.auth.modulos;
    let result;
    result = this.agregarMenu(mantenimiento, modulos, sideBarItems);
    result = this.agregarMenu(gestion, modulos, result);
    result = this.agregarMenu(funcionalidad, modulos, result);
    result = this.agregarMenu(historial, modulos, result);
    // RUTAS PERMITIDAS
    const rutasPermitidas = this.generarRutasPermitidas();

    const dark = this.props.tema.dark;
    return (
      <>
        {/* Loader component */}
        <Loader />
        <div className={"wrapper " + (dark ? " bg-dark" : "")}>
          {/* MENU DAVID */}
          <SideBarStyle1
            dark={dark}
            setDark={this.props.setDark}
            items={result}
            logo={require("../../assets/images/logo.png")}
            homeUrl={"/"}
          />
          {/* HEADER PAGINA DAVID */}
          <NavBarStyle1
            dark={dark}
            title={"Dashboard"}
            homeUrl={"/"}
            logo={require("../../assets/images/logo.png")}
            breadCrumb={items}
          >
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.toggleNavbar}
            >
              <i className="ri-menu-3-line" />
            </button>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="line-menu half start" />
                <div className="line-menu" />
                <div className="line-menu half end" />
              </div>
            </div>
            <Collapse isOpen={collapsed} navbar style={{ marginRight: "10px" }}>
              <ul className="navbar-nav ml-auto navbar-list">
                <li className="nav-item iq-full-screen">
                  <a href="!#" className="iq-waves-effect" id="btnFullscreen">
                    <i className="ri-fullscreen-line" />
                  </a>
                </li>
              </ul>
            </Collapse>
            <ul className="navbar-list">
              <li>
                <a className="search-toggle iq-waves-effect bg-primary text-white">
                  <img
                    src={require("../../assets/images/user/1.jpg")}
                    className="img-fluid rounded"
                    alt="user"
                  />
                </a>
                <div className="iq-sub-dropdown iq-user-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white line-height">
                          {datosUsuario !== null
                            ? datosUsuario.usuario.nombre +
                              " " +
                              datosUsuario.usuario.apellidos
                            : "usuario"}
                        </h5>
                        <span className="text-white font-size-12">
                          Disponible
                        </span>
                      </div>

                      <div className="d-inline-block w-100 text-center p-3">
                        <CerrarSesion props={this.props}></CerrarSesion>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </NavBarStyle1>

          <div id="content-page" className={"content-page"}>
            <div className="container-fluid">
              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="dialog"
                  timeout={300}
                >
                  <Switch location={this.props.location}>
                    {rutasPermitidas}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        </div>

        <FooterStyle1
          dark={dark}
          footerNavList={footerItems}
          title={footerTitle}
        />
      </>
    );
  }
}

const CerrarSesion = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["usuario", "modulos"]);

  return (
    <button
      className="iq-bg-danger iq-sign-btn"
      onClick={() => cerrarSesion(props.props, removeCookie)}
    >
      Cerrar Sesión <i className="ri-login-box-line ml-2" />
    </button>
  );
};

const cerrarSesion = (props, removeCookie) => {
  const { setModulos, setUsuario } = props;
  removeCookie("usuario", { path: "/" });
  removeCookie("modulos", { path: "/" });
  setUsuario(null);
  setModulos(null);
};

const mapStateToProps = (state) => {
  const { auth, tema } = state;
  return { auth, tema };
};

const mapDispatchToProps = {
  setUsuario,
  setModulos,
  setDark,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
