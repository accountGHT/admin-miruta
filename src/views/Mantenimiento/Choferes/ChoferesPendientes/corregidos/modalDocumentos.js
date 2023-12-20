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
import { backend, backendFoto } from "../../../../../config/backend";

// COMPONENTE DE IMAGEN
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const traerDatos = async (data, setDocumentos, setCargando) => {
  const formulario = new FormData();
  formulario.append("idChofer", data.idChofer);
  const resultado = await axios.post(backend + "getDocChofer", data);
  setDocumentos(resultado.data);
  setCargando(false);
};

const ModalDocumentos = (props) => {
  const { setModalDocumentos, modalDocumentos, data, traerListaDatos } = props;
  const [documentos, setDocumentos] = useState({});
  const [aprobados, setAprobados] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [imagenActiva, setImagenActiva] = useState("");
  const [cargando, setCargando] = useState(true);

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
          imagenes = { ...imagenes, licencia: element.vchRuta };
          break;

        default:
          break;
      }
    });
  }

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
          <br></br>
          <strong>
            Los documentos no seleccionados se enviaran al postulante para su
            pronta corrección.
          </strong>
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
                image={backendFoto + imagenes.dni}
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
                image={backendFoto + imagenes.fotoChofer}
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
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva("")}
                image={backendFoto + imagenes.fotoAuto}
                title="Image Title"
              ></Lightbox>
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
                image={backendFoto + imagenes.antecedentes}
                title="Image Title"
              ></Lightbox>
            ) : null}
          </Row>
          {/* ----------------- LICENCIA DE CONDUCIR ----------------- */}
          <Row
            className="mt-3"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input
                type="checkbox"
                className="custom-control-input bg-success"
                id="licencia"
                onChange={() => {
                  setAprobados({ ...aprobados, 5: !aprobados[5] });
                }}
              />
              <Label className="custom-control-label" for="licencia">
                Licencia de conducir
              </Label>
            </div>
            <Button
              className="mr-4"
              outline
              color="primary"
              onClick={() => {
                setImagenActiva("licencia");
              }}
              disabled={cargando}
            >
              Ver documento
            </Button>
            {imagenActiva === "licencia" ? (
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva("")}
                image={backendFoto + imagenes.licencia}
                title="Image Title"
              ></Lightbox>
            ) : null}
          </Row>
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
          >
            {apro() ? "Dar de alta al conductor" : "Enviar a corregir"}
          </Button>
        </div>
      </ModalFooter>
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
    console.log(arr);
    console.log(data);

    dd.append("documentos", JSON.stringify(arr));
    console.log("revision");
  }

  const resultado = await axios.post(backend + "docValidador", dd);
  traerListaDatos();
  console.log(resultado.data);
};

export default ModalDocumentos;
