import React from "react";
import { MahasiswaProvider } from "./MahasiswaContext";
import MahasiswaForm from "./MahasiswaForm";
import MahasiswaList from "./MahasiswaList";

const Mahasiswa = () => {
    return (
        <MahasiswaProvider>
            <MahasiswaList/>
            <MahasiswaForm/>
        </MahasiswaProvider>
    )
}

export default Mahasiswa