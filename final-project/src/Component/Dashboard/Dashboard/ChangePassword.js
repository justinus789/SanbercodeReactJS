import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../Context/AppContext";

const ChangePassword = () => {
    const {inputChangePassword,setInputChangePassword,clearInputPassword,functions} = useContext(AppContext)

    const {changePassword} = functions

    useEffect(() => {

        return ()=> {
            setInputChangePassword(clearInputPassword)
        }

    },[])

    const handleChange = (event) => {
        const {name,value} = event.target

        setInputChangePassword({...inputChangePassword, [name] : value})
    }

    const checkData = () => {
        if(inputChangePassword.current_password.length < 8 || inputChangePassword.new_password.length < 8 || inputChangePassword.new_confirm_password.length < 8) {
            alert('Password Minimum 8 digit')
            return false
        } else if (inputChangePassword.new_password !== inputChangePassword.new_confirm_password) {
            alert('New password and confirm password are different !')
            return false
        }

        return true
    }

    const saveChangePassword = () => {
        console.log(inputChangePassword)
        if(checkData()) {
            changePassword()
        }
    }

    return (
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden mt-24">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative mt-6">
                </div>
                <div className="mt-6">
                <div className="w-full space-y-6">
                    <div className="w-full">
                    <div className=" relative ">
                        <p className="ml-1 text-md mb-2">Current Password</p>
                        <input 
                        type="password" 
                        name="current_password"
                        value={inputChangePassword.current_password}
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        placeholder="Input your password" />
                    </div>
                    </div>
                    <div className="w-full">
                    <div className=" relative ">
                    <p className="ml-1 text-md mb-2">New Password</p>
                        <input 
                        type="password" 
                        name="new_password"
                        value={inputChangePassword.new_password}
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        placeholder="Input your password" />
                    </div>
                    </div>
                    <div className="w-full">
                    <div className=" relative ">
                    <p className="ml-1 text-md mb-2">Confirm New Password</p>
                        <input 
                        type="password" 
                        name="new_confirm_password"
                        value={inputChangePassword.new_confirm_password}
                        onChange={handleChange}
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        placeholder="Input your password" />
                    </div>
                    </div>
                    <div>
                    <span className="block w-full rounded-md shadow-sm">
                        <button 
                        type="button" 
                        onClick={saveChangePassword}
                        className="py-2 px-4 bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Change Password
                        </button>
                    </span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword