import React, { createContext, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie'

export const AppContext = createContext()

export const AppProvider = (props) => {
    let history = useHistory()

    const clearJobsForm = {
        title : '',
        job_description : '',
        job_qualification : '',
        job_type : 'onSite',
        job_tenure : '',
        job_status : 1,
        company_name : '',
        company_image_url : '',
        company_city : '',
        salary_min : 0,
        salary_max : 0,
    }

    const clearInputRegister = {
        name: '',
        image_url: '',
        email: '',
        password: '',
    }

    const clearInputLogin = {
        email: '',
        password: '',
    }

    const clearUser = {
        name: '',
        image_url: '',
        email: '',
    }

    const clearInputPassword = {
        current_password : '',
        new_password : '',
        new_confirm_password : '',
    }

    const clearFilter = {
        company_name: '',
        salary_min: 0,
        company_city: '',
    }

    const [jobs,setJobs] = useState([])
    const [jobsDetail,setJobsDetail] = useState({})
    const [jobsForm,setJobsForm] = useState(clearJobsForm)
    const [fetchStatus,setFetchStatus] = useState(true)
    const [inputRegisterForm,setInputRegisterForm] = useState(clearInputRegister)
    const [inputLogin,setInputLogin] = useState(clearInputLogin)
    const [user,setUser] = useState(clearUser)
    const [inputChangePassword,setInputChangePassword] = useState(clearInputPassword)
    
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState(clearFilter)
    const [jobSearch,setJobSearch] = useState([])
    const [searchStatus,setSearchStatus] = useState(true)

    const fetchJobsData = async () => {
        const response = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')

        const data = response.data.data

        console.log(data)

        setJobs(data.map( el => {
            return {
                id: el.id,
                title : el.title,
                job_description : el.job_description,
                job_qualification : el.job_qualification,
                job_type : el.job_type,
                job_tenure : el.job_tenure,
                job_status : el.job_status,
                company_name : el.company_name,
                company_image_url : el.company_image_url,
                company_city : el.company_city,
                salary_min : el.salary_min,
                salary_max : el.salary_max,
            }
        }))
    }

    const searchJobsData = async () => {
        const response = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')

        const data = response.data.data

        setJobSearch(data.filter(el => {
            return el.title.toLowerCase().includes(search.toLowerCase())
        }))
    }

    const filterJobsData = async () => {
        const response = await axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')

        const data = response.data.data

        setJobSearch(data.filter(el => {
            return el.company_name.toLowerCase() === filter.company_name.toLowerCase() && el.company_city.toLowerCase() === filter.company_city.toLowerCase() && parseInt(el.salary_min) === parseInt(filter.salary_min)
        }))
    }

    const getJobsData = (id) => {
        let url = 'https://dev-example.sanbercloud.com/api/job-vacancy/' + id
        axios.get(url).then( res => {
            var {data} = res

            if(data.job_type !== 'onSite' && data.job_type !== 'work from home' && data.job_type !== 'hybrid') {
                data.job_type = 'onSite'
            }
            setJobsForm({
                title : data.title,
                job_description : data.job_description,
                job_qualification : data.job_qualification,
                job_type : data.job_type,
                job_tenure : data.job_tenure,
                job_status : data.job_status,
                company_name : data.company_name,
                company_image_url : data.company_image_url,
                company_city : data.company_city,
                salary_min : data.salary_min,
                salary_max : data.salary_max,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    const getJobsDetail = (id) => {
        let url = 'https://dev-example.sanbercloud.com/api/job-vacancy/' + id
        axios.get(url).then( res => {
            let {data} = res
            setJobsDetail({
                id: data.id,
                title : data.title,
                job_description : data.job_description,
                job_qualification : data.job_qualification,
                job_type : data.job_type,
                job_tenure : data.job_tenure,
                job_status : data.job_status,
                company_name : data.company_name,
                company_image_url : data.company_image_url,
                company_city : data.company_city,
                salary_min : data.salary_min,
                salary_max : data.salary_max,
            })
        }).catch(err => {
            console.log(err)
        })
    }

    const createJob = () => {
        let url = 'https://dev-example.sanbercloud.com/api/job-vacancy'

        axios.post(url,jobsForm,{
            headers : {
                'Authorization' : 'Bearer ' + Cookies.get("token")
            }
        }).then( ()=> {
            history.push('/dashboard/list-job-vacancy')
            setFetchStatus(true)
        }).catch(err => {
            console.log(err)
        })
    }

    const updateJob = (id) => {
        let url = 'https://dev-example.sanbercloud.com/api/job-vacancy/' + id

        axios.put(url,jobsForm,{
            headers : {
                'Authorization' : 'Bearer ' + Cookies.get("token")
            }
        }).then( ()=> {
            history.push('/dashboard/list-job-vacancy')
            setFetchStatus(true)
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteJob = (id) => {
        let url = 'https://dev-example.sanbercloud.com/api/job-vacancy/' + id
        axios.delete(url,{
            headers : {
                'Authorization' : 'Bearer ' + Cookies.get("token")
            }
        }).then(() => {
            setFetchStatus(true)
            setSearchStatus(true)
        }).catch(err => {
            console.log(err)
        })
    }

    const registerAccount = () => {
        let url = 'https://dev-example.sanbercloud.com/api/register'
        axios.post(url,inputRegisterForm).then(() => {
            history.push('/login')
        }).catch(err => {
            console.log(err)
        })
        setInputRegisterForm(clearInputRegister)
    }

    const loginAccount = () => {
        let url = 'https://dev-example.sanbercloud.com/api/login'
        axios.post(url,inputLogin).then( res => {
            const userData = {
                name: res.data.user.name,
                email: res.data.user.email,
                image_url: res.data.user.image_url,
            }

            Cookies.set('user',JSON.stringify(userData),{expires:1})
            Cookies.set('token',res.data.token,{expires: 1})
            
            history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }

    const changePassword = () => {
        let url = 'https://dev-example.sanbercloud.com/api/change-password'

        axios.post(url,inputChangePassword,{
            headers : {
                'Authorization' : "Bearer " + Cookies.get("token")
            }
        }).then( () => {
            alert('Change Password success!')
            history.push('/dashboard')
        }).catch(err => {
            alert('Current Password is wrong!')
        })
    }

    const functions = {
        fetchJobsData,
        getJobsData,
        getJobsDetail,
        createJob,
        updateJob,
        deleteJob,
        searchJobsData,
        filterJobsData,
        registerAccount,
        loginAccount,
        changePassword,
    }

    return (
        <AppContext.Provider value={{
            jobs,
            setJobs,
            jobsDetail,
            setJobsDetail,
            jobsForm,
            setJobsForm,
            clearJobsForm,
            fetchStatus,
            setFetchStatus,
            inputRegisterForm,
            setInputRegisterForm,
            clearInputRegister,
            inputLogin,
            setInputLogin,
            clearInputLogin,
            user,
            setUser,
            clearUser,
            inputChangePassword,
            setInputChangePassword,
            clearInputPassword,
            search,
            setSearch,
            filter,
            setFilter,
            clearFilter,
            jobSearch,
            setJobSearch,
            searchStatus,
            setSearchStatus,
            functions,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}