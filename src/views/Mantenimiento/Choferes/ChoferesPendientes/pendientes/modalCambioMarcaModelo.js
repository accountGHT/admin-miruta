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
  FormGroup,
} from "reactstrap";
import { backend, backendMiRuta } from "../../../../../config/backend";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import axios from "axios";

const ModalCambioMarcaModelo = (props) => {
  const { setModalCambioMarcaModelo, modalCambioMarcaModelo, data, toast } =
    props;
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [btnEstado, setBtnEstado] = useState(true);

  const [{ marca, modelo }, setFormData] = useState({
    marca: "OTRA MARCA",
    modelo: "OTRO MODELO",
  });

  const apro = () => {
    console.log(marca, "marca");
    console.log(modelo, "modelo");
    setBtnEstado(marca !== "OTRA MARCA" && modelo !== "OTRO MODELO");
  };

  const traerMarcas = async () => {
    const marcas = await axios.get(backend + "getMarca");
    setMarcas(marcas.data.marcas);
    if (marcas.codigo !== "200") {
      setBtnEstado(false);
    }
  };

  const traerModelos = async () => {
    if (parseInt(marca)) {
      const modelos = await axios.get(
        backendMiRuta + "admin/chofer/getModeloPorMarca/" + marca
      );
      setModelos(modelos.data.data);
      if (modelos.data.code !== "200") {
        setBtnEstado(false);
      }
    }
  };

  useEffect(() => {
    traerMarcas();
  }, []);

  useEffect(() => {
    traerModelos();
  }, [marca]);

  useEffect(() => {
    apro();
  }, [marca, modelo]);

  return (
    <Modal
      isOpen={modalCambioMarcaModelo}
      toggle={() => setModalCambioMarcaModelo(false)}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => setModalCambioMarcaModelo(false)}>
        Cambio de Marca o Modelo
      </ModalHeader>
      <ModalBody>
        <p>
          {(data.iMarcaVehiculo === "34" || data.iModeloVehiculo === "306") && (
            <>
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
          <Row
            className="mt-3"
            style={{ alignItems: "center", justifyContent: "space-evenly" }}
          >
            {/* ----------------- MARCA ----------------- */}
            <FormGroup className="form-group">
              <Label>Marca</Label>
              <Input
                type="select"
                className="form-control mb-3"
                onChange={(value) => {
                  setFormData((formData) => ({
                    ...formData,
                    marca: value?.target?.value || "OTRA MARCA",
                  }));
                }}
                bsSize="lg"
              >
                <option key="OTRA MARCA" value="OTRA MARCA">
                  OTRA MARCA
                </option>
                {marcas.length > 0 ? (
                  marcas.map((element) => (
                    <option key={element.id} value={element.id}>
                      {element.marca}
                    </option>
                  ))
                ) : (
                  <option key={1} value={1}>
                    No hay marcas
                  </option>
                )}
              </Input>
            </FormGroup>
            {/* ----------------- MODELO ----------------- */}
            <FormGroup className="form-group">
              <Label>Modelo</Label>
              <Input
                type="select"
                className="form-control mb-3"
                onChange={(value) => {
                  setFormData((formData) => ({
                    ...formData,
                    modelo: value?.target?.value || "OTRO MODELO",
                  }));
                }}
                value={modelo}
                bsSize="lg"
                disabled={marca === "OTRA MARCA"}
              >
                <option key="OTRO MODELO" value="OTRO MODELO">
                  OTRO MODELO
                </option>
                {modelos.length > 0 ? (
                  modelos.map((element) => (
                    <option key={element.iIdModelo} value={element.iIdModelo}>
                      {element.vchModelo}
                    </option>
                  ))
                ) : (
                  <option key={1} value={1}>
                    No hay modelos
                  </option>
                )}
              </Input>
            </FormGroup>
          </Row>
        </div>
      </ModalBody>
      <ModalFooter>
        <div
          className="container px-3"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            color={btnEstado ? "success" : "warning"}
            onClick={async () => {
              await modificarDatos(data, marca, modelo, toast);
              setModalCambioMarcaModelo(false);
            }}
            disabled={!btnEstado}
          >
            Modificar
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

const modificarDatos = async (data, marca, modelo, toast) => {
  const body = {
    idUsuario: data.idUsuario,
    iMarcaVehiculo: marca,
    iModeloVehiculo: modelo,
  };
  toast.promise(
    async () => {
      await axios.post(
        backendMiRuta + "admin/chofer/modificarMarcaModelo",
        body
      );
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

export default ModalCambioMarcaModelo;
