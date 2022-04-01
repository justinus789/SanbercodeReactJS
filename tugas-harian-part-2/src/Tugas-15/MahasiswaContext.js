import axios from "axios";
import React, {createContext, useState } from "react";

export const MahasiswaContext = createContext();

export const MahasiswaProvider15 = props => {
    const clearForm = {
        name: '', 
        course: '', 
        score: 0
    }

    const clearAlert = {
        show: false,
        type: ''
    }
    
    const [mahasiswa, setMahasiswa] = useState([])
    const [inputMahasiswa, setInputMahasiswa] = useState(clearForm)
    const [currentId, setCurrentId] = useState(null)
    const [navTheme, setNavTheme] = useState('Dark')
    const [fetchStatus, setFetchStatus] = useState(true)
    const [alert,setAlert] = useState(clearAlert)

    const fetchData = async () => {
        const response = await axios.get('http://backendexample.sanbercloud.com/api/student-scores')

        setMahasiswa(response.data.map( el => {
            return {
                id: el.id,
                name: el.name,
                course: el.course,
                score: el.score
            }
        }))
    }

    const addData = () => {
        let urlPostMahasiswa = 'http://backendexample.sanbercloud.com/api/student-scores'
  
        axios.post(urlPostMahasiswa,inputMahasiswa).then((response) => {
            setMahasiswa([...mahasiswa, {
                id: response.data.id,
                name: response.data.name,
                course: response.data.course,
                score: response.data.score
            }])
            console.log(`Menambahkan mahasiswa baru`)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const updateData = () => {
        let urlPutMahasiswa = 'http://backendexample.sanbercloud.com/api/student-scores/' + currentId
  
        axios.put(urlPutMahasiswa,inputMahasiswa).then( () => {
            let editedMahasiswa = mahasiswa.find(el => el.id === currentId)
            // editedMahasiswa = [{id:currentId},...inputMahasiswa]
            editedMahasiswa.id = currentId
            editedMahasiswa.name = inputMahasiswa.name
            editedMahasiswa.course = inputMahasiswa.course
            editedMahasiswa.score = inputMahasiswa.score
            setInputMahasiswa([...mahasiswa])
            console.log(`Mengubah mahasiswa id ke-${parseInt(currentId)}`)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const deleteData = (idMahasiswa) => {
        let url = 'http://backendexample.sanbercloud.com/api/student-scores/' + idMahasiswa

        axios.delete(url).then(() => {
            let newMahasiswa = mahasiswa.filter( el => {return el.id !== idMahasiswa})
            setMahasiswa(newMahasiswa)
        }).catch(error => {
            console.log(error.message)
        })
        setFetchStatus(true)
    }

    const functions = {
        fetchData,
        addData,
        updateData,
        deleteData
    }

    return (
        <MahasiswaContext.Provider value={{
            mahasiswa,
            setMahasiswa,
            inputMahasiswa,
            setInputMahasiswa,
            currentId,
            setCurrentId,
            functions,
            clearForm,
            navTheme,
            setNavTheme,
            fetchStatus,
            setFetchStatus,
            alert,
            setAlert,
            clearAlert
        }}>
            {props.children}
        </MahasiswaContext.Provider>
    )
}