import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const MobileForm = () => {
    const {inputMobileGames,setInputMobileGames,clearInputForm,functions} = useContext(AppContext)
    const {createData,updateData,getMobileData} = functions
    const {Id} = useParams()

    useEffect(() => {

        if(Id !== undefined) {
            getMobileData(Id)
        }

        return () => {
            setInputMobileGames(clearInputForm)
        }
    }, [])

    const handleDefaultCheck = (bool) => {
        if(bool) {
            return true
        } else {
            return false
        }
    }

    const handleChange = (event) => {
        var {name,value} = event.target

        if(name === "is_ios_app" || name === "is_android_app") {
            value = event.target.checked === true ? 1 : 0
        } else if(name === "rating" || name === "price" || name === "size" || name === "release_year" ) {
            value = parseInt(value)
        }

        setInputMobileGames( prev => ({
            ...prev,
            [name] : value
        }))
    }

    const checkData = () => {
        if(inputMobileGames.name === '' || inputMobileGames.description === '' || inputMobileGames.category === '' ||
            inputMobileGames.release_year === '' || inputMobileGames.size === '' || inputMobileGames.price === '' || 
            inputMobileGames.rating === '' || inputMobileGames.image_url === '' || inputMobileGames.is_android_app === '' || 
            inputMobileGames.is_ios_app === '') {
            alert("You must fill all field!")
            return false
        } else if(inputMobileGames.release_year < 2007 || inputMobileGames.release_year > 2021) {
            alert("Release year range 2007 - 2021!")
            return false
        } else if(inputMobileGames.rating < 0 || inputMobileGames.rating > 5) {
            alert("Rating range from 0 to 5")
            return false
        } else if(inputMobileGames.is_android_app === 0 && inputMobileGames.is_ios_app === 0) {
            alert("Please choose atleast 1 of platform")
            return false
        }

        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(checkData()) {
            if(Id === undefined) {
                createData()
            } else {
                updateData(Id)
            }
            setInputMobileGames(clearInputForm)
        }
    }

    return (
        <section className="h-screen mb-12 bg-gray-100 bg-opacity-50">
            <form onSubmit={handleSubmit} className="container max-w-2xl mx-auto shadow-md md:w-3/4 rounded-lg">
                <div className="mt-5 space-y-6 bg-white">
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Name
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                required
                                value={inputMobileGames.name}
                                name="name"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Name" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Category
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                required
                                value={inputMobileGames.category}
                                name="category"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Category" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Description
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <textarea 
                                className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Enter Mobile Games Description" 
                                name="description"
                                required
                                value={inputMobileGames.description}
                                onChange={handleChange}
                                rows="5" 
                                cols="40"/>
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Year
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="number" 
                                min="2007"
                                max="2021"
                                required
                                value={inputMobileGames.release_year}
                                name="release_year"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Year" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Size
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="number" 
                                min="1"
                                required
                                value={inputMobileGames.size}
                                name="size"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Size" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Price
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="number" 
                                min="0"
                                required
                                value={inputMobileGames.price}
                                name="price"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Price" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Rating
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="number" 
                                min="0"
                                max="5"
                                required
                                value={inputMobileGames.rating}
                                name="rating"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Rating" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Image URL
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input 
                                type="text"
                                required
                                value={inputMobileGames.image_url}
                                name="image_url"
                                onChange={handleChange}
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                placeholder="Image Link" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full mt-10 px-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Platform
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input type="checkbox" name="is_android_app" checked={handleDefaultCheck(inputMobileGames.is_android_app)} value={inputMobileGames.is_android_app} onChange={handleChange}/>
                                <label className="ml-2"> Android</label><br/>
                                <input type="checkbox" name="is_ios_app" checked={handleDefaultCheck(inputMobileGames.is_ios_app)} value={inputMobileGames.is_ios_app} onChange={handleChange}/>
                                <label className="ml-2"> iOS</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button type="submit" className="py-2 px-4 mb-3  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default MobileForm