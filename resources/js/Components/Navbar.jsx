import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { auth } = usePage().props;
    const { component } = usePage();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    WPU Blog
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    component === "Home" ? "active" : ""
                                }`}
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    component === "About" ? "active" : ""
                                }`}
                                href="/about"
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    component === "Posts" ? "active" : ""
                                }`}
                                href="/posts"
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className={`nav-link ${
                                    component === "Categories" ? "active" : ""
                                }`}
                                href="/categories"
                            >
                                Categories
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {auth.user ? (
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Welcome back, {auth.user.name}
                                </Link>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            href="/dashboard"
                                        >
                                            <i className="bi bi-layout-text-sidebar-reverse" />{" "}
                                            My Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            method="POST"
                                            href={"/logout"}
                                            as="button"
                                        >
                                            <i className="bi bi-box-arrow-right" />{" "}
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    href="/login"
                                    className={`nav-link ${
                                        component === "Login/Index"
                                            ? "active"
                                            : ""
                                    }`}
                                >
                                    <i className="bi bi-box-arrow-in-right"></i>{" "}
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
