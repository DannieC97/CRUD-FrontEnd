import { useState } from "react";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
export default function CreateCampus(props){

    const [name, setName] = useState("")
    const [imgURL, setImgURL]   = useState("")
    const [address, setAddress]       = useState("")
    const [description, setDescription]  = useState("https://www.phoenix.gov/econdevsite/MediaAssets/ASU%20Day%20Photo.jpg")
    let navigate = useNavigate();
    async function submitHandler(e){
        e.preventDefault()
        let newName = document.querySelector('.c-name').value
        let newImg = "http://www.brooklyn.cuny.edu/web/off_dosa/BCGRAD2020-Evening-01_1920x1080.jpg"
        let newAdd = document.querySelector('.c-address').value
        let newDesc = document.querySelector('.c-description').value
        let newID = props.dummyCampuses.length + 1
        setName(newName)
        setImgURL(newImg)
        setAddress(newAdd)
        setDescription(newDesc)
        let newCampus =  {id: newID, name: newName, imgURL:newImg, address:newAdd, description:newDesc, dateCreated: Date(), dateUpdated: Date() }
        props.setDummyCampuses([...props.dummyCampuses, newCampus ])
        console.log(props.dummyCampuses)
        //this line should be after post but to make it work for now: 
        navigate("/campuses")
        await Axios.post(`http://localhost:3300/api/campuses`, {name: name, imgURL:imgURL, address:address, description:description, dateCreated: Date(), dateUpdated: Date()})
        console.log('did something')


    }

    return (
        <div>
          
                <div>
                    <label>Campus Name: </label>
                    <input type="text" className="c-name"></input>
                </div>
                <div>
                    <label>Address: </label>
                    <input type="text" className="c-address"></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" className="c-description"></input>
                </div>
                <div>
                    <button className="submitBtn" onClick={submitHandler}>Add Campus</button>
               
                </div>

        </div> 
        )}

