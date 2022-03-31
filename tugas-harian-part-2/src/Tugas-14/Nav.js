import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MahasiswaContext } from "./MahasiswaContext";

const Nav = () => {
    const {navTheme} = useContext(MahasiswaContext)
    return (
        <>
            <ul className={navTheme === 'Dark' ? 'light-nav' : 'dark-nav'}>
                <li>
                    <Link to='/'>
                        Tugas 10
                    </Link>
                </li>
                <li>
                    <Link to='/tugas11'>
                        Tugas 11
                    </Link>
                </li>
                <li>
                    <Link to='/tugas12'>
                        Tugas 12
                    </Link>
                </li>
                <li>
                    <Link to='/tugas13'>
                        Tugas 13
                    </Link>
                </li>
                <li>
                    <Link to='/tugas14'>
                        Tugas 14
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Nav