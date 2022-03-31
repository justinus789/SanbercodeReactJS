import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MahasiswaContext } from "./MahasiswaContext";

const MahasiswaForm = () => {
    let history = useHistory()
    const {inputMahasiswa,setInputMahasiswa,currentId,setCurrentId,functions,clearForm,setFetchStatus,fetchStatus} = useContext(MahasiswaContext)

    const {addData,updateData} = functions

    useEffect( () => {
        if(fetchStatus) {
            setFetchStatus(false)
        }
        // Unmount
        return() => {
            setInputMahasiswa(clearForm)
        }

    },[fetchStatus,setFetchStatus])
    
    const handleChange = (event) => {
        const {name , value} = event.target
        setInputMahasiswa( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const checkData = () => {
        var data = {
            value : true,
            message : ''
        }

        if(inputMahasiswa.name === '' || inputMahasiswa.course === '' || inputMahasiswa.score === '') {
            data.value = false
            data.message = 'Semua inputan wajib diisi!'
        } else if(parseInt(inputMahasiswa.score) < 0 || parseInt(inputMahasiswa.score) > 100) {
            data.value = false
            data.message = 'Inputan nilai yang diterima adalah 0 sampai 100!'
        }

        return data
    }

    const handleSubmit = (event) => {
        event.preventDefault()
  
        let validate = checkData()
  
        if(validate.value === false) {
          alert(validate.message)
        } else {
    
          if (currentId === null) {
              addData()
          } else {
              updateData()
          }
  
          setInputMahasiswa(clearForm)
          setCurrentId(null)
        }

        history.push('/tugas14')
      }

    return (
        <div className="crud-container">
        <h1>Form Nilai Mahasiswa</h1>
        <form className='form-buah' onSubmit={handleSubmit}>
        <label>
            Nama:
        </label>
        <input type="text" required name='name' value={inputMahasiswa.name} onChange={handleChange}/>
        <label>
            Mata Kuliah:
        </label>
        <input type="text" required name='course' value={inputMahasiswa.course} onChange={handleChange}/>
        <label>
            Nilai:
        </label>
        <input type="number" required min='0' max='100' name='score' value={inputMahasiswa.score} onChange={handleChange}/>
        <button>submit</button>
        </form>
        </div>
    )
}

export default MahasiswaForm