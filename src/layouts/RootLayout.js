import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function RootLayout(){
    
    return(
        <div className="root-layout">
            <header>
                <nav>
                    <h1>UK PROPERTY IN 2023</h1>
                    <NavLink to="/">Homepage</NavLink>
                    <NavLink to="about">About Us</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="houses">Houses</NavLink>
                </nav>
                <Breadcrumb />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

