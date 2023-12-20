import React from 'react';

const Index = (props) => {
    return(
        <div className={"media align-items-center "+(props.mediaClass ? props.mediaClass : '')}>
            {props.image ? (
                <div className="">
                    <img className={props.imgClass ? props.imgClass : ''} src={props.image} alt="" />
                </div>
            ) : ''}
            {props.icon ? (
                <div className={(props.iconBgClass ? "iq-bg-"+props.iconBgClass : '')+' '+(props.iconClass ? props.iconClass : ' rounded iq-card-icon ')}>
                    <i className={props.icon} />
                </div>
            ) : ''}
            <div className={"media-body ml-3 "+(props.mediaBodyClass ? props.mediaBodyClass : '')}>
                { props.title ? (props.titleTag==='h5' && props.title ? ( <h5 className="mb-0 ">{props.title}</h5> ) :  <h6 className="mb-0">{props.title}</h6>) : ''}
                { props.subtitle ? (
                    <small className={"font-size-12 "+(props.subtitleClass ? props.subtitleClass : 'float-left')}>{props.subtitle}</small>
                ) : ''}
                { props.bodyIcon ? (<i className={props.bodyIcon} />) : '' }
                { props.description ? ( <p className={"mb-0 "+(props.descriptionClass ? props.descriptionClass : '')}>{props.description}</p> ) : ''}
            </div>
        </div>
    )
};

export default Index;