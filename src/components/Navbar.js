import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/work"}>Work</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>
        </div>
    );
}