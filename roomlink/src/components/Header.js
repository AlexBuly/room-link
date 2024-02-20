import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="navbar">
            <div class ="nav-container">
                <a href="/" className="nav-logo"><h1>RoomLink</h1></a>
                <Navbar/>
            </div>
        </div>
    )
}

export default Header