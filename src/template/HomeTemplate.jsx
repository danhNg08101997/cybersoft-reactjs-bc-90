import React from 'react';
import HeaderComponent from "../component/header/HeaderComponent.jsx";
import {Outlet} from "react-router-dom";

function HomeTemplate() {
    return (
        <div>
            <HeaderComponent />
            <Outlet />
        </div>
    );
}

export default HomeTemplate;