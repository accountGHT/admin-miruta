import React from 'react';
import { Card } from 'reactstrap';
import './style.css';

const Tarjeta1 = (props) => {

    const { imagen, titulo, color, comision, deuda, funcion } = props;    
    return (
        <Card className="iq-card p-3 m-2 sombra" style={{ minWidth: 300, maxWidth: 350 }}>
            <div className="row justify-content-between mr-3">
                <div className="redondear sombra " style={{
                    height: 95, width: 95, padding: 15, marginTop: -40, marginRight: 15, marginLeft: 18,
                    backgroundColor: color
                }}><img className="fit-image w-100" src={imagen}></img></div>
                <div className="row">
                    <h4 className="jss180 mr-2 mt-2" style={{ color: "#454a42" }}><b>{titulo}</b></h4>
                    <div>
                        <button className="mt-2 mr-0 p-0" style={{ background: "none", color: "red", border: "none" }} onClick={funcion}>
                            <i className="ri-edit-box-line font-size-16 mx-2 mt-2" style={{ color: "red" }}></i>
                        </button>
                    </div>
                    {/* <i className="ri-edit-box-line font-size-16 mx-2 mt-2" style={{ color: "red" }}></i> */}
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="ml-3 mt-3" style={{ color: "#454a42", fontWeight: 500 }} >Comision</div>
                    <div className="mx-3">S/. {comision}</div>
                </div>
                <div className="col-6">
                    <div className="mt-3" style={{ color: "#454a42", fontWeight: 500 }}>Deuda maxima</div>
                    <div >S/ {deuda}</div>
                </div>
            </div>
        </Card >
    );
}
export default Tarjeta1;