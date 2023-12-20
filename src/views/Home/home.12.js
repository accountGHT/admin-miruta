import axios from 'axios';
import { element } from 'prop-types';
import React, { useEffect, useState } from 'react'
// import { ApexChart } from '../../components/sofbox';
import { backend } from '../../config/backend';
import { index } from '../../config/pluginsInit';


const Home = () => {
    const [taxi, setTaxi] = useState({});
    const [interprovincial, setInterprovincial] = useState({});
    const [cargaPesada, setCargaPesada] = useState({});
    const [totalchofer, setTotalChofer] = useState({});

 const traerDatos = async () => {
        const taxiData = await axios.get(backend + "getViajesTaxi");
        const interprovincialData = await axios.get(backend + "getViajesInterprovincial ");
        const cargaPesadaData = await axios.get(backend + "getViajesCargaPesada");
        const totalChoferesData = await axios.get(backend + "getTotalChofer");
        const totalChoferesData = await axios.get(backend + "getTotalRecargas");
        setTaxi(taxiData.data);
        setInterprovincial(interprovincialData.data);
        setCargaPesada(cargaPesadaData.data);
        setTotalChofer(totalChoferesData.data);
    }


    useEffect(() => {
        traerDatos();
    }, []);

    return (
        <>

            {
                modelCard.map((card, index) => (
                    <Col lg="4" key={index}>
                        <Card className="iq-card ">
                            <CardBody className="iq-card-body">
                                <Row className="align-items-center">
                                    <Col lg="6" className="text-center">
                                        <img src={card.image} alt="model" className="img-fluid dash-tracking-icon" />
                                    </Col>
                                    <Col lg="6">
                                        <h3 className="mb-0">{card.title}<small className="d-block font-size-16 text-secondary">{card.subTitle}</small></h3>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            }
           
        </>
    )
}
export default Home;