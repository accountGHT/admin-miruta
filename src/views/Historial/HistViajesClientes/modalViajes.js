
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactDatatable from "@ashvin27/react-datatable";
import { Card, CardBody, CardTitle, Modal } from 'reactstrap';
import { backend } from '../../../config/backend';
const ModalViajes = (props) => {
    const { dataEnviar, modalViajes, setModalViajes } = props

    const [datam, setDatam] = useState({});
    const [loading, setLoading] = useState(true);

    const traerDatos = async () => {

        const data = new FormData();
        data.append('id', dataEnviar.id);
        const histviajes = await axios.post(backend + "getHistorialViajesXcliente", data);
        const datos = histviajes.data.historialViajesClientes;

        if (datos) {
            datos.forEach((element, index) => {
                const fechaViaje = new Date(Date.parse(element.fechaViaje));
                datos[index].fechaViaje = moment(fechaViaje).format('DD MMMM YYYY - HH:mm');
            });
            setDatam(histviajes.data.historialViajesClientes);
            setLoading(false);
        } else {
            setDatam(histviajes.data.historialViajesClientes);
            setLoading(false);
        }

    }

    useEffect(() => {
        traerDatos();
    }, [setDatam, setLoading]);
    const columns = [
        {
            key: "inicio",
            text: "Origen",
            className: "name",
            sortable: true,
        },
        {
            key: "final",
            text: "Destino",
            className: "name",
            sortable: true,
        },
        {
            key: "fechaViaje",
            text: "Fecha del viaje",
            className: "name",
            sortable: true,
        },
    ]

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
                last: "Ultimo"
            },
            no_data_text: 'No hay registros encontrados',
            loading_text: "Cargando..."
        },
        button: {
            excel: true,
            print: false,
            csv: false,
        },
    };
    return (
        <Modal
            style={{ width: "800px !important" }}
            isOpen={modalViajes}
            toggle={() => setModalViajes(false)}
            className="modal-dialog-centered">
            <Card>
                <CardTitle tag="h5" style={{ padding: "20px" }}  >Viajes de {dataEnviar.nombre}</CardTitle>
                <CardBody>
                    <ReactDatatable
                        config={config}
                        records={datam}
                        columns={columns}
                        loading={loading}
                    />
                </CardBody>
            </Card>
        </Modal>
    )
}
export default ModalViajes;