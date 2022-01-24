import { useState } from "react";
import Axios from "axios"
import React from "react";

export default function Campus({props}){
    return (
        <ul className="element">
            <li className="el-name">{props.name}</li>
            <li ><img src="http://www.brooklyn.cuny.edu/web/off_dosa/BCGRAD2020-Evening-01_1920x1080.jpg" alt="campus building" className="el-img"/></li>
            <li>{props.description}</li>
            <li>Address: {props.address}</li>

        </ul>
    )
}