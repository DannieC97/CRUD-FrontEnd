import { useNavigate } from "react-router-dom"
export default function Students() {
    let navigate = useNavigate();

    return (
        <div className="container">
            <div className="picture">
                <div className="center">
                    <h1 className="studTitle">Students</h1>
                </div>
            </div>
            <button className="addStud" onClick={() => { navigate("/createstudent") }}>Add Student</button>
        </div>
    )
}
