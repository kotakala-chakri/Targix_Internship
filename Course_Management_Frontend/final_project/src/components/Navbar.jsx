import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

        window.location.reload();
    };

    return (

        <nav className="navbar">

            <h2>GrowNow</h2>

            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                {!token && (
                    <>
                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/register">
                            Register
                        </Link>
                    </>
                )}

                {token && (
                    <>
                        <Link to="/student-dashboard">
                            Dashboard
                        </Link>

                        <button onClick={logout}>
                            Logout
                        </button>
                    </>
                )}

            </div>

        </nav>
    );
}

export default Navbar;