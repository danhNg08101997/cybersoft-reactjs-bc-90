import React from 'react';
import {NavLink} from "react-router";

function HomePage() {
    return (<>
            <ul>Link</ul>
            <li>
                <button
                    className="mt-2 inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    <NavLink to="/form/formBaiTap">Bài Tập Form - Validation</NavLink>
                </button>
            </li>
        </>
    );
}

export default HomePage;