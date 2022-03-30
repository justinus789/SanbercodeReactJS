import React, {useEffect, useContext} from 'react';
import { MahasiswaContext } from './MahasiswaContext';

const MahasiswaList = () => {
    const {mahasiswa,setInputMahasiswa,setCurrentId,functions} = useContext(MahasiswaContext)

    const {fetchData,deleteData} = functions
    
    useEffect( () => {

        fetchData()

    },[])
  
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
    }
  
    return (
        <>
            {mahasiswa!== null && (
                <div className='crud-container'>
                    <h1>Daftar Nilai Mahasiswa</h1>
                    <table>
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
            )}
        </>
    )
}

export default MahasiswaList