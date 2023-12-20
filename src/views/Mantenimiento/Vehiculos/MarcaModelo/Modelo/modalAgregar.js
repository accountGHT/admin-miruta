import axios from "axios";
import { element } from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Modal,
  Row,
  Card,
  Button,
  CardTitle,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { backend } from "../../../../../config/backend";
import { index } from "../../../../../config/pluginsInit";

const ModalAgregar = (props) => {
  const { modalAgregar, setModalAgregar, toast, traerDatos } = props;
  const [datos, setDatos] = useState();
  const [modelos, setModelos] = useState();
  const [btnEstado, setBtnEstado] = useState(true);
  const [datosI, setDatosI] = useState({
    modelo: "",
    id: "",
  });

  const traerDatoM = async () => {
    const marcas = await axios.get(backend + "getMarca");
    const modelos = await axios.get(backend + "getModeloT");
    setDatos(marcas.data.marcas);
    if (marcas.codigo !== "200") {
      setBtnEstado(false);
    }
    setModelos(modelos.data.modeloT);
  };

  const guardarDatos = async () => {
    let existe = false;
    if (modelos !== undefined) {
      modelos.forEach((element) => {
        if (element.modelo == datosI.modelo.trim()) {
          existe = true;
        }
      });
    }
    if (!existe) {
      setBtnEstado(false);
      toast.promise(
        () => guardando(datosI),
        {
          pending: "Registrando Modelo",
          success: "El modelo se agrego con exito",
          error: "Por favor, vuelva a intentar",
        },
        {
          theme: "colored",
        }
      );
    } else {
      toast("Modelo Existe");
    }
  };

  const guardando = async (datosI) => {
    const data = new FormData();
    data.append("id", datosI.id.trim());
    data.append("modelo", datosI.modelo.trim());

    const respuesta = await axios.post(backend + "addModelo", data);
    await traerDatos();
    setModalAgregar(false);
  };

  useEffect(() => {
    traerDatoM();
    index();
  }, []);

  return (
    <Modal
      isOpen={modalAgregar}
      toggle={() => setModalAgregar(false)}
      className="modal-dialog-centered"
    >
      <Card body>
        <CardTitle tag="h5" style={{ paddingBottom: "20px" }}>
          Agregar nuevo modelo
        </CardTitle>

        <FormGroup className="form-group">
          <Label>Marca</Label>
          <Input
            type="select"
            className="form-control mb-3"
            onChange={(value) => {
              const abc = datosI;
              abc["id"] = value.target.value;
              setDatosI({ ...abc });
            }}
            bsSize="lg"
          >
            {datos !== undefined ? (
              datos.map((element) => (
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

        <Input
          type="text"
          placeholder="Nombre del modelo"
          onChange={(value) => {
            const abc = datosI;
            abc["modelo"] = value.target.value;
            setDatosI({ ...abc });
          }}
        ></Input>
        <Row style={{ padding: "20px 20px 0 20px" }}>
          <Button
            color="info"
            block
            disabled={!btnEstado}
            onClick={() => guardarDatos()}
          >
            Registrar
          </Button>
        </Row>
      </Card>
    </Modal>
  );
};
export default ModalAgregar;
