import React from "react";
import "./Sidebar.css";
import {SidebarData} from "./SidebarData";
import { Link, NavLink } from 'react-router-dom';
import uuid from "react-uuid";

class Sidebar extends React.Component {
    render(){
        return (
            <div className="Sidebar">
                <ul className="lista">
                    <div className="Sidebar-header">
                        MusicWiki
                    </div>
                    <div>
                    {SidebarData.map((item) => {
                    return(
                        <li key={uuid()}
                        className="elementosLista"
                        onClick={()=>{window.location.pathname = item.link}}>
                            <NavLink
                                to={item.link}
                                className="sidebar-link"
                                activeClassName="active"> 
                                <div id="icono">{item.icon}</div>
                                <div id="titulo">{item.title}</div>
                            </NavLink>
                        </li>
                    )
                    })}
                    </div>
                    
                </ul>
            </div>
          );
    }
  
}

export default Sidebar;