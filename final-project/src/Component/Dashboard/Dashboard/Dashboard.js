import React, { useContext } from "react";
import { AppContext } from "../../../Context/AppContext";

const Dashboard = () => {

    const {user} = useContext(AppContext)

    return (
        <div className="container h-full grid justify-items-center px-8 bg-gray-100">
            <div className="mt-52">
                <p className="text-4xl text-gray-600 font-medium text-center">Selamat datang di menu admin,  
                    <span className="text-sky-600 ml-2">
                        {user.name}
                    </span>
                </p> <br/>
                <p className="text-2xl text-pink-500 font-medium text-center">
                    Silahkan kelola data lowongan pekerjaan sesuai dengan keinginan kamu
                </p>
            </div>
        </div>
    )
}

export default Dashboard