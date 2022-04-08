import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="relative bg-white">
            <div className="mx-auto px-2 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 flex-col sm:flex-row">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to='/' className="ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </Link>
                    </div>
                    <div className="md:flex items-center justify-end md:flex-1 lg:w-0 mt-5 sm:mt-0">
                        <Link to='/login' className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Log In </Link>
                        <Link to='/register' className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Register </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav