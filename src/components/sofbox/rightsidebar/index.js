import React, {useState} from 'react';

const Index = (props) => {
    const [rightsidebar,setRightsidebar] = useState(false);
    const [miniClass, setMiniClass] = useState('')
    const togglesidebar = () => {
        setRightsidebar(!rightsidebar);
        checkRightSidebar()
    };
    const checkRightSidebar = () => { 
        if(rightsidebar){
            setMiniClass('right-sidebar')
        }else{
            setMiniClass('')
        } 
    }
    return(
    <div className={"right-sidebar-mini " +  miniClass}>
        <div className={"right-sidebar-toggle " + props.rightSidebarClass} onClick={togglesidebar}>
            <i className="fa fa-spinner fa-spin font-size-24" slot="icon" />
        </div>
        {props.children}
    </div>
    )
};

export default Index;