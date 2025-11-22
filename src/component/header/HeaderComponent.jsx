//tạo ra component
import {NavLink} from "react-router";

function HeaderComponent() {
    //thực hiện logic
    return (//trả về giao diện
        <nav className="bg-neutral-primary border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                <NavLink
                    // to="https://flowbite.com/"
                    to="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center text-xl text-headings font-semibold whitespace-nowrap">
            Flowbite
                    </span>
                </NavLink>
                <button data-collapse-toggle="navbar-dropdown" type="button"
                        className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base focus:outline-none md:hidden"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                              d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:mt-0 md:text-sm  md:border-0 md:bg-neutral-primary md:space-x-8 md:rtl:space-x-reverse space-y-1">
                        <li>
                            <NavLink
                                to="/login"
                                className={({isActive}) => {
                                    return isActive ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                }}
                                aria-current="page"
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({isActive}) => {
                                    return isActive ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                }}>
                                Register
                            </NavLink>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-body rounded hover:bg-neutral-tertiary-medium md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:w-auto md:dark:hover:bg-transparent">
                                Bài tập
                                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m19 9-7 7-7-7"/>
                                </svg>
                            </button>
                            <div id="dropdownNavbar"
                                 className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <NavLink to="/formBaiTap"
                                                 className={({isActive}) => {
                                                     return isActive ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                 }}> Bài tập ReactjsForm
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarUseNavigate"
                                    className="flex items-center justify-between w-full py-2 px-3 text-body rounded hover:bg-neutral-tertiary-medium md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:w-auto md:dark:hover:bg-transparent">
                                UseNavigate
                                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m19 9-7 7-7-7"/>
                                </svg>
                            </button>
                            <div id="dropdownNavbarUseNavigate"
                                 className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
                                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <NavLink to="/demo-use-navigate/use-navigate"
                                                 className={({isActive}) => {
                                                     return isActive ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                 }}>
                                            useNavigate
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/demo-use-navigate/fogot-pass"
                                                 className={({isActive}) => {
                                                     return isActive ? "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                                 }}>
                                            Forgot Pass
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
}

export default HeaderComponent;
