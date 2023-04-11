import { useState } from "react";
import './styles/header.css'
function Header() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [showBackdrop, setShowBackdrop] = useState(false);

    const closeOffcanvas = () => {
        setShowOffcanvas(false);
        setShowBackdrop(false);
    };

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Offcanvas dark navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => {
                        setShowOffcanvas(!showOffcanvas);
                        setShowBackdrop(true);
                    }}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {showBackdrop && (
                    <div
                        className="backdrop"
                        onClick={() => {setShowBackdrop(false); setShowOffcanvas(!showOffcanvas)}}
                    ></div>
                )}
                <div
                    className={`offcanvas offcanvas-end text-bg-dark ${
                        showOffcanvas || showBackdrop ? "show" : ""
                    }`}
                    tabIndex="-1"
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                            Dark offcanvas
                        </h5>
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={closeOffcanvas}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body"></div>
                </div>
            </div>
        </nav>
    );
}

export default Header;