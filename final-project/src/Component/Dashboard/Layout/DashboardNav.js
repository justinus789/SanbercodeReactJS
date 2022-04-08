import React, {useContext, useEffect, useState } from "react";
import logo from '../../../assets/image/logo.png'
import Cookies from 'js-cookie'
import { useHistory } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const DashboardNav = () => {
    let history = useHistory()
    const [expand,setExpand] = useState(false)

    const {user,setUser,clearUser} = useContext(AppContext)

    useEffect(()=> {
        setUser(JSON.parse(Cookies.get('user')))
    },[])

    return (
        <div>
            <nav className="bg-white light:bg-gray-800  shadow ">
                <div className="max-w-7xl mx-auto px-2">
                <div className="flex items-center justify-between h-16">
                    <div className=" flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-12" src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="block">
                    <div className=" ml-4 flex items-center md:ml-6">
                        <div className="ml-3 relative">
                            <div className="relative inline-block text-left">
                                <div>
                                <button 
                                type="button" 
                                className=" hidden md:block flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 light:text-gray-50 hover:bg-gray-100  light:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" 
                                onClick={()=>{
                                    if(!expand) {
                                        setExpand(true)
                                    } else {
                                        setExpand(false)
                                    }
                                    
                                }}
                                >
                                    <div className="flex items-center text-gray-500 text-md">
                                        <img alt="profil" src={user.image_url} className="mx-auto object-cover mr-4 rounded-full h-8 w-8 "/>
                                        {user.name} 
                                    </div>
                                </button>
                                </div>
                                {
                                    expand && (
                                        <div className="hidden md:block origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white light:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                        <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {/* <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 light:text-gray-100 light:hover:text-white light:hover:bg-gray-600" role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                Settings
                                                </span>
                                            </span>
                                            </a>
                                            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 light:text-gray-100 light:hover:text-white light:hover:bg-gray-600" role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                Account
                                                </span>
                                            </span>
                                            </a> */}
                                            <div 
                                            className="block block px-4 py-2 cursor-pointer text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 light:text-gray-100 light:hover:text-white light:hover:bg-gray-600" 
                                            onClick={()=>{
                                                Cookies.remove('token')
                                                Cookies.remove('user')
                                                setUser(clearUser)
                                                history.push('/login')
                                            }}
                                            >
                                                <span className="flex flex-col">
                                                    <span>
                                                    Logout
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    <button
                    onClick={()=>{
                        if(!expand) {
                            setExpand(true)
                        } else {
                            setExpand(false)
                        }
                        
                    }}
                     className="text-gray-800 light:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width={20} height={20} fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                        </path>
                        </svg>
                    </button>
                    {
                        expand && (
                            <div className="block sm:block origin-top-right absolute right-0 mt-10 w-32 rounded-md shadow-lg bg-white light:bg-gray-800 ring-1 ring-black ring-opacity-5">
                            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {/* <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 light:text-gray-100 light:hover:text-white light:hover:bg-gray-600" role="menuitem">
                                <span className="flex flex-col">
                                    <span>
                                    Settings
                                    </span>
                                </span>
                                </a>
                                <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 light:text-gray-100 light:hover:text-white light:hover:bg-gray-600" role="menuitem">
                                <span className="flex flex-col">
                                    <span>
                                    Account
                                    </span>
                                </span>
                                </a> */}
                                <div 
                                className="block block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 light:text-gray-100 light:hover:text-white light:hover:bg-gray-600" 
                                onClick={()=>{
                                    Cookies.remove('token')
                                    Cookies.remove('user')
                                    setUser(clearUser)
                                    history.push('/login')
                                }}
                                >
                                    <span className="flex flex-col">
                                        <span>
                                        Logout
                                        </span>
                                    </span>
                                </div>
                            </div>
                            </div>
                        )
                    }
                    </div>
                </div>
                </div>
            </nav>
            </div>

    )
}

export default DashboardNav