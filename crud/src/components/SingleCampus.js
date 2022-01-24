import { useState } from "react";
import Axios from "axios"
import Campus from "./Campus"
import { useDebugValue, useEffect } from "react";
import { useNavigate } from "react-router-dom"
export default function SingleCampus() {
    let navigate = useNavigate();
    const [campus, setCampus] = useState([])
    async function getCampus(){
        const thisCampus = await Axios.get(`http://localhost:3300/api/campuses/:campusId`)
        setCampus((thisCampus.data))
    }
    useEffect(() => {
        getCampus();
    }, [])
    return (
        <div className="container">
            <div className="campusPicture">
                <div className="center">
                    <h1 className="campTitle">Campuses</h1>
                </div>
                <div>
                {
                <Campus key = {campus[0].id} props = {campus[0]}/>
                }   
                </div>
            </div>
            <button className="addStud" onClick={() => { navigate("/createcampus") }}>Add Campus</button>
        </div>
    )
}