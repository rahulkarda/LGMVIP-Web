import React from "react";

export default function Navbar({ getUsers }) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    LetsGrowMore
                </a>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div
                                type="button"
                                onClick={getUsers}
                                className="nav-link"
                            >
                                Get Users
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
