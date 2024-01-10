// @babel/preset-react
const navbar = (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><span className="logo-icon"><img src="logo.png" alt="Logo" /></span>Z.</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >About Me</a>
                    </li>
                    <li className="nav-item dropdown" id="dropdown-container">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            My Projects
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">CipherCraft</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                </ul>
                <span className="nav-link" id="switch-label">Personal Mode&nbsp;&nbsp;</span>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider">
                        <span className="on-off-text on">ON</span>
                        <span className="on-off-text off">OFF</span>
                    </span>
                </label>
            </div>
        </div>
    </nav >

)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)

// function MainContent() {
//     return (
//         <h1>Hi there!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />

//     </div>, document.getElementById("root"))

// const p = document.createElement("p")
// p.textContent = "THis is a test"
// p.className = "prag"
// document.getElementById("root").append(p)
