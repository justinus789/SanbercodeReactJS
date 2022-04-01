import React, {useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MahasiswaContext } from './MahasiswaContext';

const MahasiswaList = () => {
    let history = useHistory()
    const {mahasiswa,setInputMahasiswa,setCurrentId,functions,navTheme,setNavTheme,fetchStatus,setFetchStatus} = useContext(MahasiswaContext)

    const {fetchData,deleteData} = functions
    
    useEffect( () => {

        if(fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }

    },[fetchStatus,setFetchStatus])
  
    const changeNavThame = () => {
        if(navTheme === 'Light') {
            setNavTheme('Dark')
        } else {
            setNavTheme('Light')
        }
    }

    const handleDelete = (event) => {
      var idMahasiswa = parseInt(event.target.value)
      deleteData(idMahasiswa)
    }

    const indexScore = (score) => {
        if(score >= 80) {
            return 'A'
        } else if(score >= 70) {
            return 'B'
        } else if(score >= 60) {
            return 'C'
        } else if(score >= 50) {
            return 'D'
        } else {
            return 'E'
        }
    }
  
    const handleEdit = (event) => {
      let idMahasiswa = parseInt(event.target.value)
      let editValue = mahasiswa[mahasiswa.findIndex(el => el.id === idMahasiswa)]
      setInputMahasiswa(editValue)
      setCurrentId(idMahasiswa)
      history.push(`tugas14/edit/${idMahasiswa}`)
    }
  
    return (
        <>
            {mahasiswa!== null && (
                <div className='crud-container'>
                    <button className='nav-btn' onClick={changeNavThame}>Change Navbar to {navTheme} Theme</button>
                    <h1>Daftar Nilai Mahasiswa</h1>
                    <div className='table-container'>
                        <Link className='create-mahasiswa-btn' to='/tugas14/create'>
                            Buat Data Nilai Mahasiswa Baru
                        </Link>
                        <table id='table1'>
                        <thead>
                            <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Mata Kuliah</th>
                            <th>Nilai</th>
                            <th>Indeks Nilai</th>
                            <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            mahasiswa.map((val, index) => {
                                return (
                                <tr key={val.id}>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.course}</td>
                                    <td>{val.score}</td>
                                    <td>{indexScore(val.score)}</td>
                                    <td>
                                    <button onClick={handleEdit} value={val.id}>Edit</button>
                                    <button onClick={handleDelete} value={val.id}>Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                            }
                        </tbody>
                        </table>
                    </div>
                    
                </div>
            )}
        </>
    )
}

export default MahasiswaList