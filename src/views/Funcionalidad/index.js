import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'reactstrap';
import TarjetaF from '../../components/cardF';
import { backend } from '../../config/backend';
import { index } from '../../config/pluginsInit';
import ModalDesactivar from './modalDesactivar';

const Funcionalidad = () => {

    const [fActivo, setFActivo] = useState([]);
    const [fInactivo, setFinactivo] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [modalDesactivar, setModalDesactivar] = useState(false);
    const [desactivar, setDesactivar] = useState(true);
    const [dataEnviar, setDataEnviar] = useState({})

    const traerDatos = async () => {
        const funcionalidadesA = await axios.get(backend + "getFuncionalidadA");
        const funcionalidadesI = await axios.get(backend + "getFuncionalidadI");
        setFActivo(funcionalidadesA.data);
        setFinactivo(funcionalidadesI.data);
        setCargando(false);
    }

    useEffect(() => {
        traerDatos();
        index();
    }, []);

    const mostrarModalDesactivar = (element, desactivar) => {
        setModalDesactivar(true);
        setDataEnviar(element);
        setDesactivar(desactivar);
    };
    return (
        <div>
            <Card className="iq-card">
                <CardHeader >

                    <CardTitle className="iq-header-title">
                        <Row>
                            <Col lg="6">
                                <h4 className="card-title">Mantenimiento de funcionalidades</h4>
                            </Col>
                        </Row>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    {fActivo.codigo === "200" ?
                        <>
                            <h5 className="mt-4 mb-2" style={{ color: "black", letterSpacing: 3 }}>Funcionalidades Activas</h5>
                            <div className="row mt-2">
                                {cargando ? <div className="my-10 w-100 justify-content-center " style={{ display: "flex", color: "white" }}><p>Cargando formas de pago...</p></div> :
                                    fActivo.funcionalidades.map(element =>
                                        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-12 col-12 my-2" key={element.idFuncionalidades}>
                                            <TarjetaF
                                                titulo={element.tipoFuncionalidad}
                                                ColorIcon="red"
                                                funcion={() => mostrarModalDesactivar(element, true)}
                                            ></TarjetaF>
                                        </div>
                                    )
                                }
                            </div>

                        </>
                        : null

                    }

                    {fInactivo.codigo === "200" ?
                        <>
                            <h5 className="mt-4 mb-2" style={{ color: "black", letterSpacing: 3 }}>Funcionalidades desactivadas</h5>
                            <div className="row">
                                {cargando ? <div className="w-100 justify-content-center" style={{ display: "flex", color: "white", margin: 30 }}><p>Cargando...</p></div> :
                                    fInactivo.funcionalidades.map(element =>
                                        <div className="col-md-6 col-lg-3 col-sm-12 col-12 my-3" key={element.idFuncionalidades}  >
                                            <TarjetaF
                                                titulo={element.tipoFuncionalidad}
                                                color="#ffffff"
                                                colorFondo="#c0c0c0"
                                                ColorIcon="red"
                                                funcion={() => mostrarModalDesactivar(element, false)}
                                            ></TarjetaF>
                                        </div>
                                    )
                                }
                            </div>
                        </>
                        : null
                    }
                    {
                        modalDesactivar ?
                            <ModalDesactivar
                                modalDesactivar={modalDesactivar}
                                setModalDesactivar={setModalDesactivar}
                                dataEnviar={dataEnviar}
                                toast={toast}
                                traerDatos={traerDatos}
                                desactivar={desactivar}
                            >
                            </ModalDesactivar>
                            : null
                    }
                </CardBody>
            </Card>
            <ToastContainer pauseOnHover={false} />
        </div>

    )
}
export default Funcionalidad;