import React from "react";
import "./Admin.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Home from "../../pages/Home/Home";
function Admin(){
    return(
        <div>
            <Topbar/>
            <div className="containers">
                <Sidebar/>
                <Home/>
                
            </div>
        </div>
    )
}
export default Admin;