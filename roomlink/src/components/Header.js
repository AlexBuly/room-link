import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="navbar">
            <div class ="nav-container">
                <a href="/" className="nav-logo"><h1>RoomLink</h1></a>
                <div id="btns">
                    <Link to="/Login">Log in</Link>
                    <Link to="/SignUp">Create an Account</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Header