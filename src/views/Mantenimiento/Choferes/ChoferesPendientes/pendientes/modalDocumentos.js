import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from "reactstrap";
import { backend } from "../../../../../config/backend";

// COMPONENTE DE IMAGEN
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import ModalCambioMarcaModelo from "./modalCambioMarcaModelo";

const traerDatos = async (data, setDocumentos, setCargando) => {
  const formulario = new FormData();
  formulario.append("idChofer", data.idChofer);
  const resultado = await axios.post(backend + "getDocChofer", data);
  console.log(resultado.data, "data doc");

  setDocumentos(resultado.data);
  setCargando(false);
};

const ModalDocumentos = (props) => {
  const { setModalDocumentos, modalDocumentos, data, toast, traerListaDatos } =
    props;
  const [documentos, setDocumentos] = useState({});
  const [aprobados, setAprobados] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const [imagenActiva, setImagenActiva] = useState("");
  const [cargando, setCargando] = useState(true);
  const [modalCambioMarcaModelo, setModalCambioMarcaModelo] = useState(false);

  console.log(data, "datos de ingreso");

  useEffect(() => {
    traerDatos(data, setDocumentos, setCargando);
  }, []);

  const apro = () => {
    let temporal = true;
    for (const key in aprobados) {
      if (Object.hasOwnProperty.call(aprobados, key)) {
        const element = aprobados[key];
        if (!element) {
          temporal = false;
        }
      }
    }
    return temporal;
  };

  // SEPARANDO LAS FOTOS POR ID
  let imagenes = {};
  if (!cargando) {
    documentos.documentos.forEach((element) => {
      switch (element.iTipoDocumento) {
        case "1":
          imagenes = { ...imagenes, dni: element.vchRuta };
          break;
        case "2":
          imagenes = { ...imagenes, fotoChofer: element.vchRuta };
          break;
        case "3":
          imagenes = { ...imagenes, fotoAuto: element.vchRuta };
          break;
        case "4":
          imagenes = { ...imagenes, antecedentes: element.vchRuta };
          break;
        case "5":
          imagenes = { ...imagenes, licenciaF: element.vchRuta };
          break;
        case "6":
          imagenes = { ...imagenes, licenciaA: element.vchRuta };
          break;

        default:
          break;
      }
    });
  }

  const mostrarModalCambioMarcaModelo = () => {
    setModalCambioMarcaModelo(true);
  };

  return (
    <Modal
      isOpen={modalDocumentos}
      toggle={() => setModalDocumentos(false)}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => setModalDocumentos(false)}>
        Documentos a revisar
      </ModalHeader>
      <ModalBody>
        <p>
          Marque los documentos que pasaron la validación.
          <br />
          <strong>
            Los documentos no seleccionados se enviaran al postulante para su
            pronta corrección.
          </strong>
          {(data.iMarcaVehiculo === "34" || data.iModeloVehiculo === "306") && (
            <>
              <br />
              <strong>
                {data.iMarcaVehiculo === "34" &&
                  `Nueva marca: ${data.nuevaMarca}`}
                <br />
                {data.iModeloVehiculo === "306" &&
                  `Nuevo modelo: ${data.nuevoModelo}`}
              </strong>
            </>
          )}
        </p>
        <div className="container px-4">
          {/* ----------------- DOCUMENTO DE IDENTIDAD ----------------- */}
          <Row
            className="mb-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="dni"
                onChange={() => {
                  setAprobados({ ...aprobados, 1: !aprobados[1] });
                }}
              />
              <Label className="custom-control-label" for="dni">
                Documento de Identidad
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("dni");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "dni" ? (
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva("")}
                image={imagenes.dni}
                title="Image Title"
              ></Lightbox>
            ) : null}
          </Row>
          {/* ----------------- FOTO DE CHOFER ----------------- */}
          <Row
            className="my-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="chofer"
                onChange={() => {
                  setAprobados({ ...aprobados, 2: !aprobados[2] });
                }}
              />
              <Label className="custom-control-label" for="chofer">
                Foto de Chofer
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("fotoChofer");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "fotoChofer" ? (
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva("")}
                image={imagenes.fotoChofer}
                title="Image Title"
              ></Lightbox>
            ) : null}
          </Row>
          {/* ----------------- FOTO DE AUTO ----------------- */}
          <Row
            className="my-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="auto"
                onChange={() => {
                  setAprobados({ ...aprobados, 3: !aprobados[3] });
                }}
              />
              <Label className="custom-control-label" for="auto">
                Foto de Auto
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("fotoAuto");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "fotoAuto" ? (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9999999,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "end",
                      padding: "10px",
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  >
                    <button
                      onClick={() => setImagenActiva("")}
                      style={{
                        width: "30px",
                        lineHeight: "30px",
                        fontSize: "30px",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      x
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "end",
                      // height: "50px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        height: "100%",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={imagenes.fotoAuto}
                        alt="fotoAuto"
                        style={{
                          objectFit: "contain",
                          height: "600px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "20%",
                        height: "200px",
                        borderRadius: "10px",
                        padding: "20px",
                        marginLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h5>Información del vehículo</h5>
                      <span>Placa: {data.placa}</span>
                      <span>
                        Marca:{" "}
                        {data.iMarcaVehiculo === "34"
                          ? data.nuevaMarca
                          : data.marca}
                      </span>
                      <span>
                        Modelo:{" "}
                        {data.iModeloVehiculo === "306"
                          ? data.nuevoModelo
                          : data.modelo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </Row>
          {/* ----------------- ANTECEDENTES PENALES ----------------- */}
          <Row
            className="my-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="penales"
                onChange={() => {
                  setAprobados({ ...aprobados, 4: !aprobados[4] });
                }}
              />
              <Label className="custom-control-label" for="penales">
                Antecedentes Penales
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("antecedentes");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "antecedentes" ? (
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva("")}
                image={imagenes.antecedentes}
                title="Image Title"
              ></Lightbox>
            ) : null}
          </Row>
          {/* ----------------- LICENCIA DE CONDUCIR FRONTAL----------------- */}
          <Row
            className="mt-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="licenciaF"
                onChange={() => {
                  setAprobados({ ...aprobados, 5: !aprobados[5] });
                }}
              />
              <Label className="custom-control-label" for="licenciaF">
                Licencia de conducir frontal
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("licenciaF");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "licenciaF" ? (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9999999,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "end",
                      padding: "10px",
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  >
                    <button
                      onClick={() => setImagenActiva("")}
                      style={{
                        width: "30px",
                        lineHeight: "30px",
                        fontSize: "30px",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      x
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "end",
                      // height: "50px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        height: "100%",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={imagenes.licenciaF}
                        alt="fotoAuto"
                        style={{
                          objectFit: "contain",
                          height: "600px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "20%",
                        height: "100px",
                        borderRadius: "10px",
                        padding: "20px",
                        marginLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h5>Licencia</h5>
                      <span>{data.licencia}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </Row>
          {/* ----------------- LICENCIA DE CONDUCIR ATRAS----------------- */}
          <Row
            className="mt-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="licenciaA"
                onChange={() => {
                  setAprobados({ ...aprobados, 6: !aprobados[6] });
                }}
              />
              <Label className="custom-control-label" for="licenciaA">
                Licencia de conducir atras
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("licenciaA");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "licenciaA" ? (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  zIndex: 9999999,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "end",
                      padding: "10px",
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  >
                    <button
                      onClick={() => setImagenActiva("")}
                      style={{
                        width: "30px",
                        lineHeight: "30px",
                        fontSize: "30px",
                        color: "white",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      x
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignContent: "center",
                      justifyContent: "end",
                      // height: "50px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "80%",
                        height: "100%",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={imagenes.licenciaA}
                        alt="fotoAuto"
                        style={{
                          objectFit: "contain",
                          height: "600px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        width: "20%",
                        height: "100px",
                        borderRadius: "10px",
                        padding: "20px",
                        marginLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <h5>Licencia</h5>
                      <span>{data.licencia}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </Row>
          {/* ----------------- CAMBIAR MARCA Y MODELO ----------------- */}
          {(data.iMarcaVehiculo === "34" || data.iModeloVehiculo === "306") && (
            <Row
              className="mt-3"
              style={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <div>
                <Label>Cambiar marca y modelo</Label>
              </div>
              <Button
                className="mr-4"
                color="secondary"
                onClick={() => {
                  mostrarModalCambioMarcaModelo();
                }}
                disabled={cargando}
              >
                Modificar
              </Button>
            </Row>
          )}
        </div>
      </ModalBody>
      <ModalFooter>
        <div
          className="container px-3"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            color={apro() ? "success" : "warning"}
            onClick={async () => {
              await enviarDocumentos(apro(), data, aprobados, traerListaDatos);
              setModalDocumentos(false);
            }}
            disabled={
              data.iMarcaVehiculo === "34" || data.iModeloVehiculo === "306"
            }
          >
            {apro() ? "Dar de alta al conductor" : "Enviar a corregir"}
          </Button>
        </div>
      </ModalFooter>
      {modalCambioMarcaModelo ? (
        <ModalCambioMarcaModelo
          modalCambioMarcaModelo={modalCambioMarcaModelo}
          setModalCambioMarcaModelo={setModalCambioMarcaModelo}
          data={data}
          toast={toast}
          traerDatos={traerDatos}
        />
      ) : null}
    </Modal>
  );
};

const enviarDocumentos = async (activado, data, aprobados, traerListaDatos) => {
  const dd = new FormData();
  dd.append("idUsuario", data.idUsuario);

  if (activado) {
    dd.append("documentos", "activado");
    console.log("activado");
  } else {
    const arr = [];
    for (const key in aprobados) {
      if (Object.hasOwnProperty.call(aprobados, key)) {
        const element = aprobados[key];
        if (element) {
          arr.push(key);
        }
      }
    }
    console.log(arr, "data envia");

    dd.append("documentos", JSON.stringify(arr));
    console.log("revision");
  }
  const resultado = await axios.post(backend + "docValidador", dd);
  traerListaDatos();
  console.log(resultado.data);
};

export default ModalDocumentos;
