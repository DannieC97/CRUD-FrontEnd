import { useState } from "react";
import Axios from "axios"
import React from "react";

export default function Campus({props}){
    return (
        <ul style={{backgroundColor: 'aquamarine', width: '100px', padding : '10px', marginLeft: '10px'}}>
            <li>{props.name}</li>
            <li>{props.description}</li>
        </ul>
    )
}