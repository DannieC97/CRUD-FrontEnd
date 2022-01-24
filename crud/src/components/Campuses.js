import { useState } from "react";
import Axios from "axios"
import Campus from "./Campus"
import { useDebugValue, useEffect } from "react";
import { useNavigate } from "react-router-dom"
export default function Campuses() {
    let navigate = useNavigate();
    const [campuses, setCampuses] = useState([])
    async function getCampuses(){
        const allCampuses = await Axios.get(`http://localhost:3300/api/campuses`)
        setCampuses((allCampuses.data))
    }
    useEffect(() => {
        getCampuses();
    }, [])
    return (
        <div className="container">
            <div className="campusPicture">
                <div className="center">
                    <h1 className="campTitle">Campuses</h1>
                </div>
                <div>
                {
                campuses && campuses.map(campus=><Campus key = {campus.id} props = {campus}/>)
                }   
                </div>
            </div>
            <button className="addStud" onClick={() => { navigate("/createcampus") }}>Add Campus</button>
        </div>
    )
}