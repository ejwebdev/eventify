import { Outlet } from "react-router-dom";
import HeaderNav from "../components/header-page/Header.jsx";

function Header() {
    return (
        <div>
            <HeaderNav />
            <Outlet />
        </div>
    );
}

export default Header;
