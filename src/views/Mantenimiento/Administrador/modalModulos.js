import React, { useEffect, useState } from "react";
import {
  Input,
  Label,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
} from "reactstrap";
import axios from "axios";
import { backend } from "../../../config/backend";

const todosModulos = {
  mantCliente: "Mantenimiento de clientes",
  mantChofer: "Mantenimiento de chofer",
  mantRecargas: "Mantenimiento de recargas",
  mantAdmin: "Mantenimiento de Administradores",
  mantVehiculos: "Mantenimiento de Vehiculos",
  mantComision: "Mantenimiento de Comision",
  mantFuncionalidad: "Mantenimiento de Funcionalidad",
  mensajeria: "Mensajería",
  mantHistorial: "Mantenimiento de Historial",
};

const ModalModulos = (props) => {
  const { cambioModal, mostrarModal, datosEditar, activarNotificacion, toast } =
    props;
  const [modulosData, setModulosData] = useState([]);
  const [modulosDataTotal, setModulosDataTotal] = useState([]);
  const [btn, setBtn] = useState(false);

  const guardandoModulo = async (datos, ids) => {
    const data = new FormData();
    data.append("dni", datos.dni);
    data.append("modulos", JSON.stringify(ids));

    const respuesta = await axios.post(backend + "controlModulos", data);
    await api();
    cambioModal("modalModulos");
  };

  const guardarDatosModulos = async (datos, modulos) => {
    const ids = [];
    for (const key in modulos) {
      if (Object.hasOwnProperty.call(modulos, key)) {
        const element = modulos[key];
        if (element === "1") {
          ids.push(key);
        }
      }
    }

    if (ids.length !== 0) {
      toast.promise(
        () => guardandoModulo(datos, ids),
        {
          pending: "Realizando cambios",
          success: "Cambios realizados con exito",
          error: "Por favor, vuelva a intentar",
        },
        {
          theme: "colored",
        }
      );
    }
  };

  const api = async () => {
    if (datosEditar.dni === "99999999") {
      setBtn(true);
    }
    const data = new FormData();
    data.append("dni", datosEditar.dni);
    const respuesta = await axios.post(backend + "getModuloEmpleado", data);
    if (respuesta.data.codigo !== "204") {
      setModulosData(respuesta.data.modulos);
    }
    setModulosDataTotal(respuesta.data.modulosTotal);
  };

  useEffect(() => {
    if (mostrarModal.modalModulos) {
      api();
    }
  }, []);

  let ddd = {};
  return (
    <Modal
      isOpen={mostrarModal["modalModulos"]}
      toggle={() => cambioModal("modalModulos")}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => cambioModal("modalModulos")}>
        Editar Roles
      </ModalHeader>
      <ModalBody>
        {modulosDataTotal
          ? modulosDataTotal.map((elementTotal) => {
              ddd[elementTotal.idModulo] = "0";
              let activo = false;
              modulosData.forEach((element) => {
                if (element.nombre === elementTotal.nombre) {
                  activo = true;
                  ddd[elementTotal.idModulo] = "1";
                }
              });

              return (
                <div
                  key={elementTotal.idModulo}
                  className="custom-control custom-checkbox "
                >
                  <Input
                    type="checkbox"
                    className="custom-control-input"
                    disabled={btn}
                    id={elementTotal.idModulo}
                    defaultChecked={activo}
                    onChange={() => {
                      if (ddd[elementTotal.idModulo] === "1") {
                        ddd[elementTotal.idModulo] = "0";
                      } else {
                        ddd[elementTotal.idModulo] = "1";
                      }
                    }}
                  />
                  <Label
                    className="custom-control-label"
                    for={elementTotal.idModulo}
                  >
                    {todosModulos[elementTotal.nombre]}
                  </Label>
                </div>
              );
            })
          : null}
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            guardarDatosModulos(
              datosEditar,
              ddd,
              cambioModal,
              activarNotificacion
            );
          }}
        >
          Guardar cambios
        </Button>
        <Button color="secondary" onClick={() => cambioModal("modalModulos")}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalModulos;
