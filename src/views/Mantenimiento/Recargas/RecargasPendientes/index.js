import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import ModalDetalles from "../shared/modalDetalles";
import { backendMiRuta } from "../../../../config/backend";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import TableStrap from "../../../../components/TableStrap/TableStrap";

const RecargasPendientes = () => {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalDetalles, setModalDetalles] = useState(false);
  const [dataEditar, setDataEditar] = useState(null);

  const traerDatos = async () => {
    const resp = await axios.get(backendMiRuta + "admin/recarga/listar/P");
    if (resp.data.code === 200) {
      const data = resp.data.data;
      const arrData = [];
      data.forEach((element, index) => {
        arrData.push({
          ...element,
          fechaProceso: moment(element.fechaProceso).format(
            "DD/MM/YYYY - HH:mm"
          ),
          fechaRecarga: moment(element.fechaRecarga).format(
            "DD/MM/YYYY - HH:mm"
          ),
        });
      });
      setDataTable(arrData);
    }

    setLoading(false);
  };

  useEffect(() => {
    traerDatos();
  }, [setDataTable, setLoading]);

  const mostrarModalDetalles = (data) => {
    setModalDetalles(true);
    setDataEditar(data);
  };

  const columns = [
    {
      key: "fechaProceso",
      text: "Fecha de Proceso",
      className: "name",
      sortable: true,
    },
    {
      key: "fechaRecarga",
      text: "Fecha de Recarga",
      className: "name",
      sortable: true,
    },
    {
      key: "nombreCompleto",
      text: "Nombre Completo",
      className: "name",
      sortable: true,
    },
    {
      key: "celular",
      text: "Celular",
      sortable: true,
    },
    {
      key: "billetera",
      text: "Billetera",
      sortable: true,
    },
    {
      key: "monto",
      text: "Monto",
      sortable: true,
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

  return (
    <Row>
      <Col sm="12">
        <Card className="iq-card">
          <CardHeader>
            <CardTitle className="iq-header-title">
              <Row>
                <Col lg="6">
                  <h4 className="card-title">Recargas Pendientes</h4>
                </Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody className="iq-card-body">
            {/* <ReactDatatable
              config={configA}
              records={dataTable}
              columns={columns}
              loading={loading}
            /> */}
            <TableStrap
              config={configA}
              records={dataTable}
              columns={columns}
              loading={loading}
            />
            {modalDetalles ? (
              <ModalDetalles
                modalDetalles={modalDetalles}
                setModalDetalles={setModalDetalles}
                dataEditar={dataEditar}
                traerDatos={traerDatos}
                toast={toast}
              />
            ) : null}
          </CardBody>
        </Card>
        <ToastContainer pauseOnHover={false} />
      </Col>
    </Row>
  );
};
export default RecargasPendientes;
