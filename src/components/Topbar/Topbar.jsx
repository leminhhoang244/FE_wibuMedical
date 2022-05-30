
import React from "react";
import "./Topbar.css";
function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Wibu</span>
                </div>
                <div className="topRightt">
                    <div className="topbarIconsContainer">
                    <div className="row row-1">
              <ul className="box-element1">
                <li className="search-nav">
                  <input type placeholder="tìm kiếm" className="search1" />
                </li>
                <i className="fa-solid fa-magnifying-glass" />
              </ul>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;