import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { backend } from "../../../config/backend";
import { index } from "../../../config/pluginsInit";
import TableStrap from "../../../components/TableStrap/TableStrap";

const HistorialRecargas = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const traerDatos = async () => {
    const histPagos = await axios.get(backend + "getHistorialPagos");
    const data = histPagos.data.historialPagos;
    if (histPagos.codigo == "200") {
      data.forEach((element, index) => {
        const fechaRecarga = new Date(Date.parse(element.fechaRecarga));
        data[index].fechaRecarga =
          moment(fechaRecarga).format("DD/MM/YYYY - HH:mm");
      });
      setData(histPagos.data.historialPagos);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    traerDatos();
    index();
  }, [setData, setLoading]);

  const columns = [
    {
      key: "nombre",
      text: "Nombre",
      className: "type_of_food",
      sortable: true,
    },
    {
      key: "apellido",
      text: "Apellido",
      className: "name",
      sortable: true,
    },
    {
      key: "montoRecarga",
      text: "MontoRecarga",
      className: "name",
      sortable: true,
    },
    {
      key: "fechaRecarga",
      text: "fechaRecarga",
      sortable: true,
    },
  ];

  const config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    filename: "Historial de recargas ",
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
                  <h4 className="card-title">Historial de Recargas</h4>
                </Col>
                <Col lg="6" className="justify-content-end d-flex"></Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody className="iq-card-body">
            {/* <ReactDatatable
                            config={config}
                            records={data}
                            columns={columns}
                            loading={loading}
                        /> */}
            <TableStrap
              config={config}
              records={data}
              columns={columns}
              loading={loading}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default HistorialRecargas;
