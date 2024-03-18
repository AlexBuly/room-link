import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <Link to="/Home" class="nav-logo">RoomLink</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/Home" class="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Login" class="nav-link">Log in</Link>
                </li>
                <li class="nav-item">
                <Link to="/SignUp" class="nav-link">Create an Account</Link>
                </li>
            </ul>
            </div>
      </nav>

    )
}

export default Header;