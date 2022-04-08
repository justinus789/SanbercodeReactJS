import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../Context/AppContext";

const JobsDetail = () => {
    let {id} = useParams()
    const {jobsDetail,functions} = useContext(AppContext)
    const {getJobsDetail} = functions

    useEffect(() => {
        getJobsDetail(id)
    },[])

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

    return (
        <div className="bg-white my-24 w-5/6 shadow overflow-hidden sm:rounded-lg mx-auto">
            <div className="px-4 py-5 sm:px-6">
                <div className="grid justify-items-center">
                    <img src={jobsDetail.company_image_url} alt="Company" className="w-1/2 snap-center w-full object-cover"/>
                </div>
                <h3 className="mt-5 text-2xl leading-6 font-bold text-gray-900">
                {jobsDetail.title}
                </h3>
                <p className="mt-3 max-w-2xl text-lg text-gray-500">
                {jobsDetail.job_tenure}
                </p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Company Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {jobsDetail.company_name}
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Company City
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {jobsDetail.company_city}
                    </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Job Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {formatStatusJob(jobsDetail.job_status)}
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Job Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {jobsDetail.job_type}
                    </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Job Qualification
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {jobsDetail.job_qualification}
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Job Description
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {jobsDetail.job_description}
                    </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Salary Minimumn
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {formatPrice(jobsDetail.salary_min)}
                    </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-bold text-gray-500">
                    Salary Maximum
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-medium">
                    {formatPrice(jobsDetail.salary_max)}
                    </dd>
                    
                </div>
                
                </dl>
            </div>
        </div>
    )
}

export default JobsDetail