import "../App.css"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="footer">
            <div className="home">
                <Link to="/">Home</Link>
                

            </div>
            <div className="links">
                <Link to="students">Students</Link>
                <Link to="campuses">Campuses</Link>
                <Link to="createstudent">Create Student</Link>
                <Link to="createcampus">Create Campus</Link>


            </div>
        </div>
        
    )
}