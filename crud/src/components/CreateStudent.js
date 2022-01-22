export default function CreateStudent() {
    return (
        <div className="wrapperForm">
            <form className="myForm">
                <div>
                    <label>First Name: </label>
                    <input type="text" name="first"></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="last"></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email"></input>
                </div>
                <div>
                    <label>Campus: </label>
                    <select className="campBtn" name="campusSelect">
                        <option value="">--Choose a Campus</option>

                    </select>
                </div>
                <div>
                    <input className="submitBtn" type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}