import { useNavigate } from "react-router-dom"
export default function Campuses() {
    let navigate = useNavigate();
    return (
        <div className="container">
            <div className="campusPicture">
                <div className="center">
                    <h1 className="campTitle">Campuses</h1>
                </div>
            </div>
            <button className="addStud" onClick={() => { navigate("/createcampus") }}>Add Campus</button>
        </div>
    )
}