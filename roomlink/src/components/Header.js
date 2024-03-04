import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="navbar">
            <div class ="nav-container">
               <Link to="/Home"  className="nav-logo"><h1>RoomLink</h1></Link>
                <div id="btns">
                    <Link to="/Login">Log in</Link>
                    <Link to="/SignUp">Create an Account</Link>
                    <Link to="/Home">Home</Link>
                </div>
            </div>
        </div>

    )
}

export default Header