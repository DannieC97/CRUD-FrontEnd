export default function CreateCampus(){
    return(
        <div>
              <form className="myForm">
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
                    <input className="submitBtn" type="submit" value= "Submit"></input>
                </div>
                
                
                

            </form>
        </div>
    )
}