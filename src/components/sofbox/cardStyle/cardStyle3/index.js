import React from 'react';
import {ApexChart} from "../../index";

const Index = (props) => {
    return(
        <>
            <div className="iq-card">
                <div className="iq-card-body p-0">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="p-3">
                                <span className={"font-size-16 "+props.titleClass}>{props.title}</span>
                                <h3>{props.count}</h3>
                                {props.upDown}
                            </div>
                        </div>
                        <div className="col-lg-8 align-self-center">
                            <ApexChart
                                element={props.chartId}
                                chartOption={props.chartOption}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;