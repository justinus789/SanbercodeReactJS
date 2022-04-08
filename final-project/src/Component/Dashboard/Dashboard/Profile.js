import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

const Profile = () => {
    const {user} = useContext(AppContext)

    return (
        <section className=" bg-gray-100 bg-opacity-50 mt-24">
            <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div className="p-4 bg-sky-50 border-t-2 border-sky-400 rounded-lg  mx-auto grid justify-items-center">
                    <img alt="profil" src={user.image_url} className="mx-auto object-cover rounded-full h-20 w-20 " />
                </div>
                <div className="space-y-6 bg-white">
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.name}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.email}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Role
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            Admin of JobsPedia Website
                        </dd>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile