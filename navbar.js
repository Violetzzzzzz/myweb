const Navbar = (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="index.html"><span className="logo-icon"><img src="logo.png" alt="Logo" /></span>Z.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="index.html" >Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About Me</a>
                    </li>
                    <li className="nav-item dropdown" id="dropdown-container">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Projects
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="https://github.com/Violetzzzzzz/cipher-craft.git">CipherCraft</a></li>
                            <li><a className="dropdown-item" href="https://github.com/Violetzzzzzz/CuddleSnap-Gallery.git">CuddleSnap Gallery</a></li>
                            <li><a className="dropdown-item" href="https://github.com/Violetzzzzzz/web-browser-javafx.git">Web Browser</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="cv.pdf">Resume</a>
                    </li>
                </ul>
                {/* <span className="nav-link" id="switch-label">Personal Mode&nbsp;&nbsp;</span>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider">
                        <span className="on-off-text on">ON</span>
                        <span className="on-off-text off">OFF</span>
                    </span>
                </label> */}
            </div>
        </div>
    </nav >

)

function aboutMe() {
    ReactDOM.render(
        Navbar,
        document.getElementById("navbar-container")
    )
}


ReactDOM.render(
    Navbar,
    document.getElementById("navbar-container")
)

