import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const JobsForm = () => {
    const {id} = useParams()
    const {jobsForm,setJobsForm,clearJobsForm,functions} = useContext(AppContext)
    const {getJobsData,createJob,updateJob} = functions

    useEffect(()=> {
        if(id !== undefined) {
            getJobsData(id)
        }

        return () => {
            setJobsForm(clearJobsForm)
        }

    },[])

    const handleChange = (event) => {
        var {name,value} = event.target
        if(name === 'job_status') {
            value = parseInt(value)
        }

        setJobsForm({...jobsForm, [name] : value})
    }

    const checkData = () => {

        if(jobsForm.job_type !== 'onSite' && jobsForm.job_type !== 'work from home' && jobsForm.job_type !== 'hybrid') {
            alert('Please choose your job type properly!')
            return false
        } else if(jobsForm.job_status !== 0 && jobsForm.job_status !== 1) {
            alert('Job status value only 0 and 1')
            return false
        } else if(parseInt(jobsForm.salary_min) < 0 || parseInt(jobsForm.salary_max) < 0) {
            alert('Salary value can not be negative')
            return false
        } else if(parseInt(jobsForm.salary_min) > parseInt(jobsForm.salary_max)) {
            alert('Min salary cant be higher than Max salary')
            return false
        }

        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(checkData()) {
            if(id === undefined) {
                createJob()
            } else {
                updateJob(id)
            }
        }

    }

    return (
        <section className="bg-gray-100 bg-opacity-50 my-8">
            <form onSubmit={handleSubmit} className="container max-w-4xl mx-auto shadow-md md:w-3/4 rounded-lg">
                <div className="space-y-6 bg-white rounded-lg">
                <p className="text-center text-2xl text-gray-600 pt-8">Jobs Form</p>
                    <div className="items-center w-full px-4 py-2 mt-6 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Job Title
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="title"
                                value={jobsForm.title}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Title" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Job Description
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="job_description"
                                value={jobsForm.job_description}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Description" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Job Qualification
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="job_qualification"
                                value={jobsForm.job_qualification}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Qualification" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Job Type
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                            <select 
                            className="rounded-lg w-full text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" 
                            name="job_type"
                            value={jobsForm.job_type}
                            onChange={handleChange}>
                                <option value="onSite">
                                    onSite
                                </option>
                                <option value="work from home">
                                    work from home
                                </option>
                                <option value="hybrid">
                                    hybrid
                                </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Job Tenure
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="job_tenure"
                                value={jobsForm.job_tenure}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Job Tenure" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Job Status
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                            <div className="flex items-center gap-8">
                                <label className="inline-flex items-center">
                                    <input 
                                    type="radio" 
                                    name="job_status" 
                                    value={1}
                                    onChange={handleChange}
                                    checked={jobsForm.job_status === 1}
                                    className="h-5 w-5 text-red-600 cursor-pointer" />
                                    <span className="ml-2 text-gray-700">
                                        Dibuka
                                    </span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input 
                                    type="radio" 
                                    name="job_status" 
                                    value={0}
                                    onChange={handleChange} 
                                    checked={jobsForm.job_status === 0}
                                    className="h-5 w-5 ml-12 text-red-600 cursor-pointer" />
                                    <span className="ml-2 text-gray-700">
                                        Ditutup
                                    </span>
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Company Name
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="company_name"
                                value={jobsForm.company_name}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Company Name" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Company Image URL
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="company_image_url"
                                value={jobsForm.company_image_url}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Company Image URL" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Company City
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="text" 
                                name="company_city"
                                value={jobsForm.company_city}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Company City" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Minimum Salary
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="number"
                                min={0} 
                                name="salary_min"
                                value={jobsForm.salary_min}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Minimum Salary" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full px-4 py-2 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/4">
                            Maximum Salary
                        </h2>
                        <div className="max-w-sm mx-auto md:w-3/4">
                            <div className=" relative ">
                                <input 
                                type="number"
                                min={0} 
                                name="salary_max"
                                value={jobsForm.salary_max}
                                onChange={handleChange}
                                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                                required
                                placeholder="Maximum Salary" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button 
                        type="submit" 
                        className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default JobsForm