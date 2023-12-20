/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { index } from "../../../config/pluginsInit";
import { backend, backendMiRuta } from "../../../config/backend";
import Tarjeta1 from "../../../components/card";
import Tarjeta2 from "../../../components/card02";
import ModalEditar from "./modalEditar";
import ModalDesactivar from "./modalDesactivar";
import { toast, ToastContainer } from "react-toastify";
import { Card } from "reactstrap";

const comision = async ({ activar, toast, traerDatos }) => {
  toast.promise(
    async () => {
      if (activar) {
        await axios.put(backendMiRuta + "admin/comision/activar");
      } else {
        await axios.put(backendMiRuta + "admin/comision/desactivar");
      }
      traerDatos();
    },
    {
      pending: "Modificando datos...",
      success: "Los datos se modificaron correctamente",
      error: "Por favor, vuelva a intentar",
    },
    {
      theme: "colored",
    }
  );
};

const Comision = () => {
  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalDesactivar, setModalDesactivar] = useState(false);
  const [dataEnviar, setDataEnviar] = useState({});
  const [fActivos, setFActivos] = useState([]);
  const [fInactivo, setFInactivo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [desactivar, setDesactivar] = useState(true);

  const traerDatos = async () => {
    const comision = await axios.get(backendMiRuta + "admin/comision/obtener");
    setData(comision.data.data);
    const activos = await axios.get(backend + "getformaPagoA");
    const inactivo = await axios.get(backend + "getformaPagoD");
    setFActivos(activos.data);
    setFInactivo(inactivo.data);
    setCargando(false);
    // console.log(inactivo);
  };

  useEffect(() => {
    traerDatos();
    index();
  }, []);

  const mostrarModalEditar = (element) => {
    setModalEditar(true);
    setDataEnviar(element);
  };

  const mostrarModalDesactivar = (element, desactivar) => {
    setModalDesactivar(true);
    setDataEnviar(element);
    setDesactivar(desactivar);
  };

  const imagen = {
    Taxista: "https://image.flaticon.com/icons/png/512/235/235844.png",
    Interprovincial:
      "https://modasa.com.pe/wp-content/uploads/2019/09/buses-home-personal-apolo-9-min.png",
    "Carga pesada":
      "https://chexpress.pe/wp-content/uploads/2018/04/carga-pesada-peru.png",
  };

  return (
    <div className="container" style={{ padding: 0 }}>
      <ToastContainer pauseOnHover={false} />
      <div className="row mb-5 mt-4">
        <h2 style={{ marginLeft: 15, letterSpacing: 3 }}>Comisiones</h2>
      </div>
      <div className="row">
        {cargando ? (
          <div
            className="my-10 w-100 justify-content-center"
            style={{ display: "flex" }}
          >
            <p>Cargando comision...</p>
          </div>
        ) : (
          <Card
            className="iq-card p-3 m-2 sombra"
            style={{
              minWidth: 250,
              maxWidth: 350,
            }}
          >
            <div className="row justify-content-between px-4 pb-2">
              <div
                className="transparente"
                style={{
                  height: 80,
                  width: 80,
                  padding: 15,
                  marginRight: 15,
                  marginLeft: 10,
                  // backgroundColor: color
                }}
              >
                <img
                  className="fit-image w-100"
                  src="https://th.bing.com/th/id/OIP.UDrtLExTXEhMohAXYPqfdwHaHa?pid=ImgDet&rs=1"
                />
              </div>
              <div className="row">
                <h4
                  className="jss180 mr-2 mt-2"
                  style={{ color: "#454a42", paddingTop: "25px" }}
                >
                  <b>Comisión</b>
                </h4>
                <div>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      paddingTop: "29px",
                    }}
                    onClick={() =>
                      comision({
                        activar: data.flagComisio !== "1",
                        toast,
                        traerDatos,
                      })
                    }
                  >
                    <i
                      className="ri-shut-down-line mx-2 mt-2"
                      style={{
                        color: data.flagComisio !== "1" ? "green" : "red",
                        fontSize: "20px",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
      <div className="row mb-5 mt-4" style={{ paddingTop: "50px" }}>
        <h2 style={{ marginLeft: 15, letterSpacing: 3 }}>Formas de Pago</h2>
      </div>
      {fActivos.codigo === "200" ? (
        <div className="row mt-2">
          {cargando ? (
            <div
              className="my-10 w-100 justify-content-center "
              style={{ display: "flex" }}
            >
              <p>Cargando formas de pago...</p>
            </div>
          ) : (
            fActivos.formaPagos.map((element) => (
              <div
                className="col-xl-3 col-md-6 col-lg-4 col-sm-12 col-12 my-2"
                key={element.id}
              >
                <Tarjeta2
                  imagen={element.ruta}
                  titulo={element.nombre}
                  comision="holaa"
                  ColorIcon="red"
                  funcion={() => mostrarModalDesactivar(element, true)}
                ></Tarjeta2>
              </div>
            ))
          )}
        </div>
      ) : null}

      {fInactivo.codigo === "200" ? (
        <>
          <h5 className="mt-4 mb-2" style={{ letterSpacing: 3 }}>
            Formas de pago inactivos
          </h5>
          <div className="row">
            {cargando ? (
              <div
                className="w-100 justify-content-center"
                style={{ display: "flex", margin: 30 }}
              >
                <p>Cargando...</p>
              </div>
            ) : (
              fInactivo.formaPagos.map((element) => (
                <div
                  className="col-md-6 col-lg-3 col-sm-12 col-12 my-3"
                  key={element.id}
                >
                  <Tarjeta2
                    imagen={element.ruta}
                    titulo={element.nombre}
                    color="#ffffff"
                    colorFondo="#c0c0c0"
                    ColorIcon="red"
                    funcion={() => mostrarModalDesactivar(element, false)}
                  ></Tarjeta2>
                </div>
              ))
            )}
          </div>
        </>
      ) : null}

      <div className="row my-3"></div>
      {modalEditar ? (
        <ModalEditar
          modalEditar={modalEditar}
          setModalEditar={setModalEditar}
          dataEnviar={dataEnviar}
          toast={toast}
          traerDatos={traerDatos}
        ></ModalEditar>
      ) : null}
      {modalDesactivar ? (
        <ModalDesactivar
          modalDesactivar={modalDesactivar}
          setModalDesactivar={setModalDesactivar}
          dataEnviar={dataEnviar}
          toast={toast}
          traerDatos={traerDatos}
          desactivar={desactivar}
        ></ModalDesactivar>
      ) : null}
    </div>
  );
};

export default Comision;
