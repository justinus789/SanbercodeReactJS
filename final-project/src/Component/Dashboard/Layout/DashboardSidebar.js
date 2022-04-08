import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    return (
        <div className="grow relative bg-white light:bg-gray-800 ">
            <div className="flex flex-col sm:flex-row sm:justify-around min-h-screen h-full">
                <div className="hidden md:block w-72 border-2 border-gray-100 ">
                    <div className="flex items-center justify-start mx-6 mt-10">
                        <span className="text-gray-600 light:text-gray-300 ml-4 text-2xl font-bold">
                            Menu Admin
                        </span>
                    </div>
                    <nav className="mt-10 px-6 ">
                        <Link to='/dashboard' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="9" />
                            <rect x="14" y="3" width="7" height="5" />
                            <rect x="14" y="12" width="7" height="9" />
                            <rect x="3" y="16" width="7" height="5" />
                            </svg>
                            <span className="mx-4 text-lg font-normal">
                                Dashboard
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link to='/dashboard/list-job-vacancy' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg">
                            <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard-data">
                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                            </svg>
                            <span className="mx-4 text-lg font-normal">
                                List Data Table
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link to='/dashboard/list-job-vacancy/form' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="addIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="addIconTitle">Add</title> <path d="M17 12L7 12M12 17L12 7"/> <circle cx="12" cy="12" r="10"/> </svg>
                            <span className="mx-4 text-lg font-normal">
                                Data Form
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link to='/profile' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                            <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                </path>
                            </svg>
                            <span className="mx-4 text-lg font-normal">
                                Profil
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                        <Link to='/change-password' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="cog"
                                width="20" 
                                height="20"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                fill="currentColor"
                                d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                                ></path>
                            </svg>
                            <span className="mx-4 text-lg font-normal">
                                Change Password
                            </span>
                            <span className="flex-grow text-right">
                            </span>
                        </Link>
                    </nav>
                </div>
                <div className="md:hidden w-16 border-2 border-gray-100 h-screen">
                    <div className="mt-24 text-center">
                        <ul>
                            <Link to='/dashboard' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                className="m-auto"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <rect x="3" y="3" width="7" height="9" />
                                <rect x="14" y="3" width="7" height="5" />
                                <rect x="14" y="12" width="7" height="9" />
                                <rect x="3" y="16" width="7" height="5" />
                                </svg>
                            </Link>
                            <Link to='/dashboard/list-job-vacancy' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg">
                                <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clipboard-data m-auto">
                                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                                </svg>
                            </Link>
                            <Link to='/dashboard/list-job-vacancy/form' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" className="m-auto" xmlns="http://www.w3.org/2000/svg" aria-labelledby="addIconTitle" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" color="#000000"> <title id="addIconTitle">Add</title> <path d="M17 12L7 12M12 17L12 7"/> <circle cx="12" cy="12" r="10"/> </svg>
                            </Link>
                            <Link to='/profile' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </Link>
                            <Link to='/change-password' className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors light:hover:text-white light:hover:bg-gray-600 duration-200  text-gray-600 light:text-gray-400 rounded-lg ">
                                <svg
                                    className="m-auto"
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="cog"
                                    width="20" 
                                    height="20"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                    fill="currentColor"
                                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                                    ></path>
                                </svg>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardSidebar