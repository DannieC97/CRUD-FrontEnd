import { useState } from "react";
import Axios from "axios"
import React from "react";

export default function Student({props}){

function Navigation(){
    let navigate = useNavigate()
    function campusRedirect(){    
            navigate("/campuses/:campusId")
     }
    }
    return (
        <ul style={{backgroundColor: 'aquamarine', width: '100px', padding : '10px', marginLeft: '10px'}}>
            <li>{props.firstName}</li>
            <li>{props.lastName}</li>
            <li onClick={campusRedirect}>Student Campus{/*  props.campusId?? */ }</li>
            
        </ul>
    )
}
