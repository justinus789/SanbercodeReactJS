import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const JobsList = () => {
    let history = useHistory()
    const {jobs,fetchStatus,setFetchStatus,filter,setFilter,clearFilter,search,setSearch,setSearchStatus,functions} = useContext(AppContext) 
    const {fetchJobsData,deleteJob} = functions

    useEffect(() => {
        if(fetchStatus) {
            fetchJobsData()
            setFetchStatus(false)
        }
    },[fetchStatus,setFetchStatus])

    const formatStatusJob = (status) => {
        if(status) {
            return 'Dibuka'
        } else {
            return 'Ditutup'
        }
    }

    const formatPrice = (price) => {
        if(price) {
            return "Rp. " + price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") + ",-"
        } else {
            return price
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target

        setFilter({...filter, [name] : value})
    }

    const checkData = () => {
        if(filter.salary_min < 0) {
            alert('Salary can not be negative')
            return false
        }

        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(checkData()) {
            setSearch('')
            history.push('/dashboard/list-job-vacancy/search')
            setSearchStatus(true)
        }
    }

    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault()

        setFilter(clearFilter)
        history.push('/dashboard/list-job-vacancy/search')
        setSearchStatus(true)
    }

    return (
        <div className="p-4 md:px-6 py-8 mb-32 ">
            <div className="bg-white rounded-lg sm:max-w-5xl sm:w-full sm:mx-auto sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-500 bg-white">
                            Filter criteria
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                            <div className="w-full">
                                <div className=" relative ">
                                    <p className="text-gray-500 mb-2 ml-2">Company Name</p>
                                    <input 
                                    type="text"
                                    required 
                                    name="company_name"
                                    value={filter.company_name}
                                    onChange={handleChange}
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="Company Name" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <p className="text-gray-500 mb-2 ml-2">Company City</p>
                                    <input 
                                    type="text"
                                    required 
                                    name="company_city"
                                    value={filter.company_city}
                                    onChange={handleChange}
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="Company City" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                <p className="text-gray-500 mb-2 ml-2">Min Salary</p>
                                    <input 
                                    type="number"
                                    min={0}
                                    required 
                                    name="salary_min"
                                    value={filter.salary_min}
                                    onChange={handleChange}
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                    placeholder="Minimum Salary" />
                                </div>
                            </div>
                            <div>
                            <span className="block w-full rounded-md shadow-sm">
                                <button type="submit" className="py-2 px-4  bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Filter
                                </button>
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative bg-white overflow-x-auto shadow-md sm:rounded-lg sm:max-w-sm md:max-w-sm lg:max-w-2xl xl:max-w-5xl 2xl:max-w-6xl mx-auto mt-2">
                <form onSubmit={handleSubmitSearch} className="p-4">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 light:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    </div>
                    <input 
                    type="text" 
                    required 
                    name="search"
                    value={search}
                    onChange={handleChangeSearch}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" 
                    placeholder="Search Job Title" />
                    </div>
                </form>
                <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-sky-100 light:bg-gray-700 light:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Company Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Company City
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Tenure
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Minimum Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Maximum Salary
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map( item => {
                                return (
                                    <tr key={item.id} className="odd:bg-white even:bg-gray-50 border-b odd:light:bg-gray-800 even:light:bg-gray-700 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600">
                                        <th scope="row" className="px-4 py-4 font-medium text-gray-900 light:text-white whitespace-nowrap">
                                            <img src={item.company_image_url} width={70} height={70} alt="Company" />
                                        </th>
                                        <td className="px-4 py-4">
                                            <p className="line-clamp-1">
                                                {item.company_name}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="line-clamp-1">
                                                {item.company_city}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="line-clamp-1">
                                                {item.title}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="line-clamp-1">
                                                {formatStatusJob(item.job_status)}
                                            </p>
                                        </td>
                                        <td className="px-3 py-4">
                                            <p className="line-clamp-1">
                                                {item.job_description}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="line-clamp-1">
                                                {item.job_qualification}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                            <p className="line-clamp-1">
                                                {item.job_tenure}
                                            </p>
                                        </td>
                                        <td className="px-2 py-4">
                                            <p className="line-clamp-1">
                                                {item.job_type}
                                            </p>
                                        </td>
                                        <td className="px-1 py-4">
                                            <p className="line-clamp-1">
                                                {formatPrice(item.salary_min)}
                                            </p>
                                        </td>
                                        <td className="px-1 py-4">
                                            <p className="line-clamp-1">
                                                {formatPrice(item.salary_max)}
                                            </p>
                                        </td>
                                        <td className="px-4 py-4">
                                                <button 
                                                type="button" 
                                                className="py-1 px-3  bg-sky-600 hover:bg-sky-700 focus:ring-sky-500 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                onClick={() => {
                                                    history.push('/dashboard/list-job-vacancy/edit/' + item.id)
                                                }}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                type="button" 
                                                className="py-1 px-3 mt-2  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                                onClick={() => {
                                                    deleteJob(item.id)
                                                }}
                                                >
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

export default JobsList