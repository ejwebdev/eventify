import { Outlet } from "react-router-dom";
import Header from "../components/header-page/Header.jsx";

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
