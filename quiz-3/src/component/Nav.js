import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { AppContext } from '../context/AppContext'

const Nav = () => {
    let history = useHistory()

    const {searchName,setSearchName,setSearchGames,setSearchStatus} = useContext(AppContext)

    const handleChangeName = (event) => {
        setSearchName(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        history.push('/search/'+ searchName)
        setSearchStatus(true)
    }

    return (
        <div className="topnav">
            <Link to='/'>
                <img src={logo} width={70} alt='logo' />
            </Link>
            <Link to='/'>Home</Link>
            <Link to='/mobile-list'>Mobile List</Link>
            <Link to='/about'>About</Link>

             {/* Tailwind search bar */}
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div className="relative">
                    <input 
                    type="text" 
                    value={searchName}
                    onChange={handleChangeName}
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                    placeholder="Mobile Apps Name"/>
                </div>
                <button 
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" 
                type="submit">
                    Cari
                </button>
            </form>

        </div>
    )
}

export default Nav