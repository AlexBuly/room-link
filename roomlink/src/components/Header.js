import { Link } from "react-router-dom";
const Header = () => {
    return (
        /*<div className="navbar">
            <div class ="nav-container">
               <Link to="/Home"  className="nav-logo"><h1>RoomLink</h1></Link>
                <div id="btns">
                    <Link to="/Login">Log in</Link>
                    <Link to="/SignUp">Create an Account</Link>
                    <Link to="/Home">Home</Link>
                </div>
            </div>
        </div>*/
        <nav className="navbar navbar-expand-lg navbar-dark bg-black">
             <Link to="/Home"  className="nav-logo"><h1>RoomLink</h1></Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <div id="btns">
                <Link to="/Login">Log in</Link>
                <Link to="/SignUp">Create an Account</Link>
                 <Link to="/Home">Home</Link>
        </div>
      </ul>
    </div>
  </nav>

    )
}

export default Header