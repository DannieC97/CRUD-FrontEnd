import { useState } from "react";
import Axios from "axios"
import Campus from "./Campus"
import { useDebugValue, useEffect } from "react";
import { useNavigate } from "react-router-dom"
export default function SingleCampus(props) {
    let navigate = useNavigate();
    const [campus, setCampus] = useState([])
    async function getCampus(){
        const thisCampus = await Axios.get(`http://localhost:3300/api/campuses/:campusId `)
        setCampus((thisCampus.data))
    }
    useEffect(() => {
        getCampus();
    }, [])


    //this won't work properly because single campus should take take in props of id
    // and basically in app.js we would need to have a function the was in useEffect
    //which would set a navigation for each and every campus in the list so that
    //the axios. get above would actually get the right thing, that being the id for the specific
    //campus we wish to navigate to. So in axios.get it would be ('first part of link ${/*props.campusId*/})
    return (
        <div className="container">
            {
                //the line below is the correct line for the app, the next line is dummy data
            //<Campus key = {campus[0].id} props = {campus[0]}/>
            <Campus key = {props.data.id} props = {props.data}/>
             }   
           
            <button className="addStud" onClick={() => { navigate("/createstudent") }}>Add Student</button>
        </div>
    )
}