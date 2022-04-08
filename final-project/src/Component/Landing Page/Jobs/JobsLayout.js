import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const JobsLayout = () => {
    let history = useHistory()
    const {jobs,fetchStatus,setFetchStatus,filter,setFilter,clearFilter,search,setSearch,setSearchStatus,functions} = useContext(AppContext)
    const {fetchJobsData} = functions

    useEffect(() => {

        if(fetchStatus) {
            fetchJobsData()
            setFetchStatus(false)
        }

    }, [fetchStatus,setFetchStatus])

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
            history.push('/job-vacancy/search')
            setSearchStatus(true)
        }
    }

    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault()

        setFilter(clearFilter)
        history.push('/job-vacancy/search')
        setSearchStatus(true)
    }

    return (
        <div className="w-full bg-white p-12">
            <div className="from-cyan-500 to-blue-500 bg-gradient-to-r mb-10 rounded-lg">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-60 lg:px-4 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-600">Give some people job today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Get started </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link to="/login" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"> Log In </Link>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg sm:max-w-2xl sm:w-full sm:mx-auto sm:overflow-hidden shadow mb-3">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-500 bg-white">
                            Filter Job
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
            <div className="header flex items-end justify-between mb-12">
                <div className="title">
                    <p className="text-4xl font-bold text-gray-800 mb-4">
                        Jobs List
                    </p>
                    <p className="text-2xl font-light text-gray-400">
                        All Jobs News
                    </p>
                </div>
                <div className="text-end">
                    <form onSubmit={handleSubmitSearch} className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                        <div className=" relative ">
                            <input 
                            type="text" 
                            required 
                            name="search"
                            value={search}
                            onChange={handleChangeSearch}
                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                            placeholder="Enter a Job Title" />
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    jobs.map( el => {
                        return (
                            <Link to={'/job-vacancy/'+el.id} key={el.id} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                                <div className="w-full block h-full">
                                    {!el.job_status && (
                                        <span className="px-4 py-2  absolute text-base text-white bg-red-500 ">
                                            Ditutup
                                        </span>
                                    )}
                                    {el.job_status && (
                                        <span className="px-4 py-2  absolute text-base text-white bg-green-500 ">
                                        Dibuka
                                    </span>
                                    )}
                                    <img alt="Jobs" src={el.company_image_url} className="h-64 w-full object-cover" />
                                </div>
                                <div className="bg-white light:bg-gray-800 w-full p-4">
                                    <div className="w-full block h-full">
                                        <p className="text-indigo-500 text-md font-medium">
                                            {el.title}
                                        </p>
                                        <p className="text-gray-800 light:text-white text-xl font-medium mb-2">
                                            {el.company_name}
                                        </p>
                                        <p className="text-gray-400 light:text-gray-300 font-light text-md line-clamp-2">
                                            {el.job_description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default JobsLayout