import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Search = () => {

    const {searchGames,searchStatus,setSearchStatus,functions} = useContext(AppContext)
    const {searchData} = functions
    let valueOfSearch = useParams()

    useEffect(() => {
        
        if(searchStatus) {
            searchData(valueOfSearch)
            setSearchStatus(false)
        }

    },[searchStatus,setSearchStatus])

    const formatPrice = (price) => {
        if(parseInt(price) > 0 ) {
            return "Rp. " + price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".") + ",-"
        } else if(parseInt(price) === 0 ){
            return "Free"
        } else {
            return "- (minus value)"
        }
    }

    const formatSize = (size) => {
        if(parseInt(size) > 1000) {
            return size/1000 + " GB"
        } else {
            return size + " MB"
        }
    }

    const formatPlatform = (isAndroid,isIos) => {
        if(isAndroid && isIos) {
            return "Android & iOS"
        } else if(isAndroid) {
            return "Android"
        } else if(isIos) {
            return "iOS"
        } else {
            return "none"
        }
    }

    return (
        <div className="row">
            <div className="section">
                <p className="mt-5 mb-8 text-center font-bold text-2xl">Search Mobile Apps</p>
        {
            searchGames.map( el => {
                return (
                            <div key={el.id} className="bg-white w-full shadow mb-10 overflow-hidden sm:rounded-lg">
                                <div className="px-4 py-5 sm:px-6">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {el.name}
                                    </h3>
                                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                    Release Year : {el.release_year}
                                    </p>
                                    <img src={el.image_url} alt="Mobile Games" className="my-2 w-1/2 h-300 object-cover" />
                                </div>
                                <div className="border-t border-gray-200">
                                    <dl>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-bold text-gray-500">
                                        Price
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 font-medium sm:mt-0 sm:col-span-2">
                                        {formatPrice(el.price)}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-bold text-gray-500">
                                        Rating
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 font-medium sm:mt-0 sm:col-span-2">
                                        {el.rating}
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-bold text-gray-500">
                                        Category
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 font-medium sm:mt-0 sm:col-span-2">
                                        {el.category}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-bold text-gray-500">
                                        Size
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 font-medium sm:mt-0 sm:col-span-2">
                                        {formatSize(el.size)}
                                        </dd>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-bold text-gray-500">
                                        Platform
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 font-medium sm:mt-0 sm:col-span-2">
                                        {formatPlatform(el.is_android_app,el.is_ios_app)}
                                        </dd>
                                    </div>
                                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-bold text-gray-500">
                                        Description
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 font-medium sm:mt-0 sm:col-span-2">
                                        {el.description}
                                        </dd>
                                    </div>
                                    </dl>
                                </div>
                            </div>
                )
            })
        }
            </div>
        </div>
    )
}

export default Search