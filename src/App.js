import React from "react";
import Content from "./component/main/content";
import Aside from './component/aside/Aside'
import './App.css'
function App () {
    return(
        <div className="school-firstsection">
            <div className="school-info">
                <Content/>
            </div>
            <div className="school-data">
                <Aside/>
            </div>
        </div>  
    )
}

export default App