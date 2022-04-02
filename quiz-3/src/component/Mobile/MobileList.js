import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const MobileList = () => {
    const {mobileGames,fetchStatus,setFetchStatus,functions} = useContext(AppContext)
    const {fetchData,deleteData} = functions

    useEffect(() => {
        if(fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }
    },[fetchStatus,setFetchStatus])

    const formatMobileListPlatform = (isAndroid,isIOS) => {
        if(isAndroid && isIOS) {
            return "Android iOS"
        } else if (isAndroid) {
            return "Android"
        } else if (isIOS) {
            return "iOS"
        } else {
            return "none"
        }
    }

    const handleDelete = (event) => {
        let id = event.target.value
        deleteData(id)
    }

    return (
        <div className="row">
            <div className="section">
                <p className="my-5 text-center font-bold text-2xl">Mobile Apps List</p>
                <Link to='/mobile-form' >
                    <button type="button" className="mb-3 py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Create Data
                    </button>
                </Link>
                <table className="table mb-5 p-5 w-full bg-white shadow rounded-lg mx-auto">
                    <thead>
                        <tr>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                No
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Name
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Category
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Description
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Release Year
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Size
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Price
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Rating
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Platform
                            </th>
                            <th className="border-b p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mobileGames.map( (el,index) => {
                                return (
                                    <tr key={el.id} className="text-gray-700">
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {index+1}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {el.name}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {el.category}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5" >
                                           <p 
                                            style={{
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            width: "120px",
                                            display: "block",
                                            overflow: "hidden"
                                            }}>
                                                {el.description} 
                                            </p> 
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {el.release_year}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {el.size}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {el.price}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {el.rating}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            {formatMobileListPlatform(el.is_android_app,el.is_ios_app)}
                                        </td>
                                        <td className="border-b p-5 dark:border-dark-5">
                                            <Link to={'/mobile-form/edit/' + el.id} >
                                                <button type="button" className="p-1 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Edit
                                                </button>
                                            </Link>
                                                <button onClick={handleDelete} value={el.id} type="button" className="p-1 mt-1 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                    Delete
                                                </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MobileList