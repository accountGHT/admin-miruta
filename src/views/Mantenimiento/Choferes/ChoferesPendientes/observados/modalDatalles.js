import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button,Row,Label, Modal,ModalBody,ModalFooter,ModalHeader,Input} from "reactstrap";
import { backend, backendFoto } from "../../../../../config/backend";
// COMPONENTE DE IMAGEN
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";




const ModalDetalles = (props) => {
  const { setModalDetalles, modalDetalles, data } = props;
  const [datos , setDatos] =useState({});
  const [cargando, setCargando] = useState(true);
  const [documentos, setDocumentos] = useState({});
  const [imagenActiva, setImagenActiva] = useState('');
  

  let imagenes = {};
  let valoresData = {};
  if (!cargando) {
  
    datos.forEach(element=>{
      valoresData={...valoresData,[element.tipoDocumento]: element.estado};
    });
    documentos.forEach(element => {

      switch (element.tipoDocumento) {
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


  const traerDatos = async () => {
  
    const formulario = new FormData();
    formulario.append('idUsuario', data.idUsuario);
    const resultado = await axios.post(backend + "getDocObservados", data);

    setDatos(resultado.data.documentosObservados);
    setDocumentos(resultado.data.documentosObservados);
    setCargando(false);
  };

  useEffect(() => {
    traerDatos(); 
  }, []);

  return (
    <Modal
      isOpen={modalDetalles}
      toggle={() => setModalDetalles(false)}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => setModalDetalles(false)}>
        Detalles del Chofer
      </ModalHeader>
      <ModalBody>
        <div className="container px-4">
          {/* ----------------- DOCUMENTO DE IDENTIDAD ----------------- */}
          <Row className="mb-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <div
              className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input type="checkbox" className="custom-control-input bg-success" disabled checked={ valoresData[1] === "2" ?true : false }
                id="dni" />
              <Label className="custom-control-label" for="dni">Documento de Identidad</Label>
            </div>
            <Button className="mr-4" outline color="primary" onClick={() => {
              setImagenActiva('dni');
            }} disabled={cargando}>Ver documento</Button>
            {imagenActiva === 'dni' ?
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva('')}
                image={backendFoto + imagenes.dni}
                title="Image Title"></Lightbox>
              : null} 
          </Row>
          {/* ----------------- FOTO DE CHOFER ----------------- */}
          <Row className="my-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <div
              className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input type="checkbox" className="custom-control-input bg-success" disabled checked={ valoresData[2] === "2" ?true : false }
                id="chofer" />
              <Label className="custom-control-label" for="chofer">Foto de Chofer</Label>
            </div>
            <Button className="mr-4" outline color="primary" onClick={() => {
              setImagenActiva('fotoChofer');
            }} disabled={cargando}>Ver documento</Button>
            {imagenActiva === 'fotoChofer' ?
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva('')}
                image={backendFoto + imagenes.fotoChofer}
                title="Image Title"></Lightbox>
              : null}
          </Row>
          {/* ----------------- FOTO DE AUTO ----------------- */}
          <Row className="my-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <div
              className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input type="checkbox" className="custom-control-input bg-success" disabled checked={ valoresData[3] === "2" ?true : false }
                id="auto" />
              <Label className="custom-control-label" for="auto">Foto de Auto</Label>
            </div>
            <Button className="mr-4" outline color="primary" onClick={() => {
              setImagenActiva('fotoAuto');
            }} disabled={cargando}>Ver documento</Button>
            {imagenActiva === 'fotoAuto' ?
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva('')}
                image={backendFoto + imagenes.fotoAuto}
                title="Image Title"></Lightbox>
              : null}
          </Row>
          {/* ----------------- ANTECEDENTES PENALES ----------------- */}
          <Row className="my-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <div
              className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input type="checkbox" className="custom-control-input bg-success" disabled checked={ valoresData[4] === "2" ?true : false }
                id="penales" />
              <Label className="custom-control-label" for="penales">Antecedentes Penales</Label>
            </div>
            <Button className="mr-4" outline color="primary" onClick={() => {
              setImagenActiva('antecedentes');
            }} disabled={cargando}>Ver documento</Button>
            {imagenActiva === 'antecedentes' ?
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva('')}
                image={backendFoto + imagenes.antecedentes}
                title="Image Title"></Lightbox>
              : null}
          </Row>
          {/* ----------------- LICENCIA DE CONDUCIR ----------------- */}
          <Row className="mt-3" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <div
              className="custom-control custom-checkbox custom-checkbox-color-check custom-control-inline">
              <Input type="checkbox" className="custom-control-input bg-success" disabled checked={ valoresData[5] === "2" ?true : false }
                id="licencia"/>
              <Label className="custom-control-label" for="licencia">Licencia de conducir</Label>
            </div>
            <Button className="mr-4" outline color="primary" onClick={() => {
              setImagenActiva('licencia');
            }} disabled={cargando}>Ver documento</Button>
            {imagenActiva === 'licencia' ?
              <Lightbox
                showTitle={false}
                onClose={() => setImagenActiva('')}
                image={backendFoto + imagenes.licencia}
                title="Image Title"></Lightbox>
              : null}
          </Row>
        </div>

      </ModalBody>
      <ModalFooter>
      <Button color="primary" onClick={() => setModalDetalles(false)}>
          Aceptar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDetalles;
