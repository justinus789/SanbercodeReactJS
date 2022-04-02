import React, { createContext, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

export const AppContext = createContext()

export const AppProvider = (props) => {
    let history = useHistory()

    const clearInputForm = {
        name : '',
        description : '',
        category : '',
        release_year : 2007,
        size : 0,
        price : 0,
        rating : 0,
        image_url : '',
        is_android_app : 1,
        is_ios_app : 1,
    }

    const [mobileGames,setMobileGames] = useState([])
    const [inputMobileGames,setInputMobileGames] = useState(clearInputForm)
    const [fetchStatus,setFetchStatus] = useState(true)
    const [searchGames,setSearchGames] = useState([])
    const [searchName,setSearchName] = useState("")
    const [searchStatus,setSearchStatus] = useState(true)

    const fetchData = async () => {
        const {data} = await axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')

        setMobileGames(data.map( el => {
            return {
                id : el.id,
                name : el.name,
                description : el.description,
                category : el.category,
                release_year : el.release_year,
                size : el.size,
                price : el.price,
                rating : el.rating,
                image_url : el.image_url,
                is_android_app : el.is_android_app,
                is_ios_app : el.is_ios_app,
            }
        }))
    }

    const searchData = async () => {
        const {data} = await axios.get('https://backendexample.sanbercloud.com/api/mobile-apps')

        setSearchGames(data.filter(el => {
            return el.name.toLowerCase().includes(searchName.toLowerCase())
        }))
    }

    const createData = () => {
        let url = "https://backendexample.sanbercloud.com/api/mobile-apps"
        axios.post(url,inputMobileGames).then( () => {
            history.push('/mobile-list')
            setFetchStatus(true)
        } ).catch(err => {
            console.log(err)
        })
    }

    const getMobileData = (id) => {
        let url = "https://backendexample.sanbercloud.com/api/mobile-apps/" + id
        axios.get(url).then( (response) => {
            const {data} = response
            
            setInputMobileGames({
                name : data.name,
                description : data.description,
                category : data.category,
                release_year : data.release_year,
                size : data.size,
                price : data.price,
                rating : data.rating,
                image_url : data.image_url,
                is_android_app : data.is_android_app,
                is_ios_app : data.is_ios_app,
            })

        } ).catch(err => {
            console.log(err)
        })
    }

    const updateData = (id) => {
        let url = "https://backendexample.sanbercloud.com/api/mobile-apps/" + id
        axios.put(url,inputMobileGames).then( () => {
            history.push('/mobile-list')
            setFetchStatus(true)
        } ).catch(err => {
            console.log(err)
        })
    }

    const deleteData = (id) => {
        let url = "https://backendexample.sanbercloud.com/api/mobile-apps/" + id
        axios.delete(url).then( () => {
            setFetchStatus(true)
        } ).catch(err => {
            console.log(err)
        })
    }

    const functions = {
        fetchData,
        searchData,
        createData,
        getMobileData,
        updateData,
        deleteData,
    }

    return (
        <AppContext.Provider value={{
            mobileGames,
            setMobileGames,
            inputMobileGames,
            setInputMobileGames,
            fetchStatus,
            setFetchStatus,
            clearInputForm,
            searchGames,
            setSearchGames,
            searchName,
            setSearchName,
            searchStatus,
            setSearchStatus,
            functions,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}