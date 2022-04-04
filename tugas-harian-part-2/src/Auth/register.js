import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const clearInputRegister = {
        name: '',
        email: '',
        password: '',
    }

    const [inputForm,setInputForm] = useState(clearInputRegister)

    const handleChange = (event) => {
        const {name, value} = event.target

        setInputForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const checkData = () => {
        if(isNaN(inputForm.password)) {
            alert('password must be number')
            return false
        } else if(inputForm.password.length < 8) {
            alert('password minimum 8 digit')
            return false
        }

        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(checkData()) {
            let url = 'https://backendexample.sanbersy.com/api/register'
            axios.post(url,inputForm).then(() => {
                window.location = '/login'
            }).catch(err => {
                console.log(err)
            })
            setInputForm(clearInputRegister)
        }
    }

    return (
        <div className="mx-auto mt-28 flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Register Form
            </div>
            <div className="p-6 ">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <input 
                        type="text" 
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        name="name" 
                        required
                        value={inputForm.name}
                        onChange={handleChange}
                        placeholder="Name" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <input 
                        type="text" 
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        name="email" 
                        required
                        value={inputForm.email}
                        onChange={handleChange}
                        placeholder="Email" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className=" relative ">
                        <input 
                        type="password" 
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        name="password" 
                        required
                        value={inputForm.password}
                        onChange={handleChange}
                        placeholder="Password" />
                        </div>
                    </div>
                    <div className="flex w-full mt-4">
                        <button 
                        type="submit" 
                        className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register