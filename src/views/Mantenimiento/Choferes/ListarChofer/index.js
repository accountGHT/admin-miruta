import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import ModalDetalles from "./modalDetalles";
import ModalDesactivar from "./modalDesactivar";
import { backend } from "../../../../config/backend";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import TableStrap from "../../../../components/TableStrap/TableStrap";

import { getDataFromApi } from "../../../../services/dataService";
import environment from "../../../../config/environment";

const ChofListar = () => {
  const [data, setData] = useState(null);
  const [dataActivos, setDataActivos] = useState([]);
  const [dataDesactivados, setDataDesactivados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activos, setActivos] = useState(true);

  const [modalDetalles, setModalDetalles] = useState(false);
  const [modalDesactivar, setModalDesactivar] = useState(false);
  const [dataEditar, setDataEditar] = useState(null);

  const traerDatos = async (param) => {
    setLoading(true);

    const activos = await axios.get(backend + "getChoferesA");
    if (activos.data.codigo !== "204") {
      const dataActivos = activos.data.choferesActivos;

      dataActivos.forEach((element, index) => {
        const nombre1 = camelCase(element.nombreCompleto);
        dataActivos[index].nombreCompleto = nombre1;
        const fechaEstado = new Date(Date.parse(element.fechaEstado));
        dataActivos[index].fechaEstado =
          moment(fechaEstado).format("DD/MM/YYYY - HH:mm");
      });

      setDataActivos(dataActivos.map((a, i) => ({ ...a, key: i + "activo" })));
    }

    const desactivos = await axios.get(backend + "getChoferesD");

    if (desactivos.data.codigo !== "204") {
      const dataInactivos = desactivos.data.choferesInactivos;

      dataInactivos.forEach((element, index) => {
        const nombre1 = camelCase(element.nombreCompleto);
        dataInactivos[index].nombreCompleto = nombre1;
        const fechaEstado = new Date(Date.parse(element.fechaEstado));
        dataInactivos[index].fechaEstado =
          moment(fechaEstado).format("DD/MM/YYYY - HH:mm");
      });

      setDataDesactivados(
        dataInactivos.map((a, i) => ({ ...a, key: i + "inactivo" }))
      );
    }

    setLoading(false);
  };

  const camelCase = (str) => {
    return (" " + str).replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g,
      function (match, index) {
        if (+match === 0) return " ";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      }
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataFromApi();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
    traerDatos();
  }, [setDataActivos, setLoading, setDataDesactivados]);

  const mostrarModalDetalles = (data) => {
    setModalDetalles(true);
    setDataEditar(data);
  };
  const columnsD = [
    {
      key: "fechaEstado",
      text: "Fecha de Ingreso",
    },
    {
      key: "nombreCompleto",
      text: "Nombre Completo",
    },
    {
      key: "correoElectronico",
      text: "Correo Electronico",
    },
    {
      key: "celular",
      text: "Celular",
    },
    {
      key: "vAceptados",
      text: "vAcept",
    },
    {
      key: "vCancelados",
      text: "vCanc",
    },
    {
      key: "vCompletados",
      text: "vComp",
    },
    {
      key: "vTotal",
      text: "vTotal",
    },
    {
      key: "action",
      text: "Acciones",
      cell: (record) => {
        return (
          <Fragment>
            <button
              className="btn btn-warning btn-sm my-1"
              onClick={() => mostrarModalDetalles(record)}
              style={{ marginRight: "10px" }}
            >
              Detalles
            </button>
            <button
              className="btn btn-danger btn-sm my-1"
              onClick={() => mostrarModalDesactivar(record)}
            >
              {activos ? "Descativar" : "Activar"}
            </button>
          </Fragment>
        );
      },
    },
  ];

  const columns = [
    {
      key: "fechaEstado",
      text: "Fecha de Ingreso",
    },
    {
      key: "nombreCompleto",
      text: "Nombre Completo",
    },
    {
      key: "correoElectronico",
      text: "Correo Electronico",
    },
    {
      key: "celular",
      text: "Celular",
    },
    {
      key: "vAceptados",
      text: "vAcept",
    },
    {
      key: "vCancelados",
      text: "vCanc",
    },
    {
      key: "vCompletados",
      text: "vComp",
    },
    {
      key: "vTotal",
      text: "vTotal",
    },
    {
      key: "action",
      text: "Acciones",
      cell: (record) => {
        return (
          <Fragment>
            {/* <button
              className="btn btn-primary btn-sm"
                onClick={() => cambioModal("modalEditar", record)}
              style={{ marginRight: "10px" }}
            >
              Editar
            </button> */}
            <button
              className="btn btn-warning btn-sm my-1"
              onClick={() => mostrarModalDetalles(record)}
              style={{ marginRight: "10px" }}
            >
              Detalles
            </button>
            <button
              className="btn btn-danger btn-sm my-1"
              onClick={() => mostrarModalDesactivar(record)}
            >
              desactivar
              {/* {activos ? "Descativar" : "Activar"} */}
            </button>
          </Fragment>
        );
      },
    },
  ];

  const configA = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    filename: "Choferes Activos",
    sort: {
      column: "nombre",
      order: "asc",
    },
    language: {
      length_menu: "Mostrando _MENU_ registros por pagina",
      filter: "Buscar en registros...",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      pagination: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Ultimo",
      },
      no_data_text: "No hay registros encontrados",
      loading_text: "Cargando...",
    },
    button: {
      excel: true,
      print: false,
      csv: false,
    },
  };

  const configD = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    filename: "Choferes Desactivos",
    sort: {
      column: "nombre",
      order: "asc",
    },
    language: {
      length_menu: "Mostrando _MENU_ registros por pagina",
      filter: "Buscar en registros...",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      pagination: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Ultimo",
      },
      no_data_text: "No hay registros encontrados",
      loading_text: "Cargando...",
    },
    button: {
      excel: true,
      print: false,
      csv: false,
    },
  };

  const mostrarModalDesactivar = (data) => {
    setModalDesactivar(true);
    setDataEditar(data);
  };

  return (
    <Row>
      <Col sm="12">
        <Card className="iq-card">
          <CardHeader>
            <CardTitle className="iq-header-title">
              {/* <Row>
                <div>
                  <h1>Environment: {environment.environment}</h1>
                  <h2>API URL: {environment.apiUrl}</h2>
                  {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                </div>
              </Row> */}
              <Row>
                <Col lg="6">
                  <h4 className="card-title">Mantenimiento Choferes</h4>
                </Col>
                <Col lg="6" className="justify-content-end d-flex">
                  <div className="custom-control custom-switch custom-control-inline">
                    {/* Radio Button */}
                    <Input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitch1"
                      defaultChecked={activos}
                      onChange={() => {
                        setActivos(!activos);
                        traerDatos();
                      }}
                    />
                    <Label className="custom-control-label" for="customSwitch1">
                      {activos ? "Choferes Activos" : "Choferes Desactivos"}
                    </Label>
                  </div>
                </Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody className="iq-card-body">
            {activos ? (
              <>
                {/* <ReactDatatable
                  config={configA}
                  records={dataActivos}
                  columns={columns}
                  loading={loading}
                  onChange={(e) => {
                    traerDatos({ filtro: e });
                  }}
                /> */}
                <TableStrap
                  config={configA}
                  records={dataActivos}
                  columns={columns}
                  loading={loading}
                />
              </>
            ) : (
              // <ReactDatatable
              //   config={configD}
              //   records={dataDesactivados}
              //   columns={columnsD}
              //   loading={loading}
              //   onChange={(e) => {
              //     traerDatos({ filtro: e });
              //   }}
              // />
              <TableStrap
                config={configD}
                records={dataDesactivados}
                columns={columnsD}
                loading={loading}
              />
            )}
            {modalDetalles ? (
              <ModalDetalles
                modalDetalles={modalDetalles}
                setModalDetalles={setModalDetalles}
                dataEditar={dataEditar}
                traerDatos={traerDatos}
                toast={toast}
              ></ModalDetalles>
            ) : null}
            {modalDesactivar ? (
              <ModalDesactivar
                modalDesactivar={modalDesactivar}
                setModalDesactivar={setModalDesactivar}
                dataEditar={dataEditar}
                traerDatos={traerDatos}
                toast={toast}
              ></ModalDesactivar>
            ) : null}
          </CardBody>
        </Card>
        <ToastContainer pauseOnHover={false} />
      </Col>
    </Row>
  );
};
export default ChofListar;
