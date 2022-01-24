import { useState } from "react";
import Axios from "axios"
export default function CreateCampus() {
    
    const [firstname, setFirstname] = useState("")
    const [lastName, setLastName]   = useState("")
    const [email, setEmail]       = useState("")
    const [imageURL, setImageURL]  = useState("https://www.phoenix.gov/econdevsite/MediaAssets/ASU%20Day%20Photo.jpg")
    const [gpa, setGPA] = useState(1)
    async function submitHandler(e){
        e.preventDefault()
        await Axios.post(`http://localhost:3300/api/students`, {firstname, lastName, email, imageURL, gpa})
        console.log('did something')
    }

    return (
        <div>
            <form className="myForm" onSubmit={submitHandler}>
                <div>
                    <label>Campus Name: </label>
                    <input type="text" name="first"></input>
                </div>
                <div>
                    <label>Address: </label>
                    <input type="text" name="last"></input>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <input className="submitBtn" type="submit" value="Submit" ></input>
                </div>




            </form>
        </div>
    )
}
