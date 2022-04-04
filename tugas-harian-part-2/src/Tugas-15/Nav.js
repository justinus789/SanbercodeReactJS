import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MahasiswaContext } from "./MahasiswaContext";
import logo from "../logo.png"
import Cookies from 'js-cookie'

const Nav = () => {
    const {navTheme,setNavTheme} = useContext(MahasiswaContext)

    const changeNavTheme = () => {
        if(navTheme === 'Light') {
            setNavTheme('Dark')
        } else {
            setNavTheme('Light')
        }
    }

    const navThemeReverseValue = navTheme === "Dark" ? "Light" : "Dark"

    return (
        <>
            <nav className={`bg-white ${navTheme.toLowerCase()}:bg-gray-800  `}>
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <img className="h-12 w-15" src={logo} alt="logo"/>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to='/' className={`text-gray-300  hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Tugas 10
                                    </Link>
                                    <Link to='/tugas11' className={`text-gray-300  hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Tugas 11
                                    </Link>
                                    <Link to='/tugas12' className={`text-gray-300  hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Tugas 12
                                    </Link>
                                    <Link to='/tugas13' className={`text-gray-300  hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Tugas 13
                                    </Link>
                                    <Link to='/tugas14' className={`text-gray-300  hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Tugas 14
                                    </Link>
                                    <Link to='/tugas15' className={`text-gray-300  hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}>
                                        Tugas 15
                                    </Link>
                                    {!Cookies.get('token') && 
                                        <>
                                            <Link to='/register' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                                                Register
                                            </Link>
                                            <Link to='/login' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                                                Login
                                            </Link>
                                        </>
                                        }
                                        {Cookies.get('token') && 
                                            <a 
                                            className={`text-gray-300 cursor-pointer hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                                            onClick={()=> {
                                                Cookies.remove('token')
                                                window.location = '/login'
                                            }}>
                                                Logout
                                            </a>
                                        }
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="ml-4 flex items-center md:ml-6">
                            <button type="button" onClick={changeNavTheme} className="py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                {navThemeReverseValue}
                            </button>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button className={`text-gray-800 ${navTheme.toLowerCase()}:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}>
                                <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to='/' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                            Tugas 10
                        </Link>
                        <Link to='/tugas11' className={`text-gray-300 ${navTheme.toLowerCase()}:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                            Tugas 11
                        </Link>
                        <Link to='/tugas12' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                            Tugas 12
                        </Link>
                        <Link to='/tugas13' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                            Tugas 13
                        </Link>
                        <Link to='/tugas14' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                            Tugas 14
                        </Link>
                        <Link to='/tugas15' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                            Tugas 15
                        </Link>
                        {!Cookies.get('token') && 
                        <>
                            <Link to='/register' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                                Register
                            </Link>
                            <Link to='/login' className={`text-gray-300 hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}>
                                Login
                            </Link>
                        </>
                        }
                        {Cookies.get('token') && 
                            <a 
                            className={`text-gray-300 cursor-pointer hover:text-indigo-800 ${navTheme.toLowerCase()}:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                            onClick={()=> {
                                Cookies.remove('token')
                                window.location = '/login'
                            }}>
                                Logout
                            </a>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav