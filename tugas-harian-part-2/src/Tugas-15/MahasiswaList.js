import React, {useEffect, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MahasiswaContext } from './MahasiswaContext';

const MahasiswaList15 = () => {
    let history = useHistory()
    const {mahasiswa,setInputMahasiswa,setCurrentId,functions,fetchStatus,setFetchStatus,alert,setAlert,clearAlert} = useContext(MahasiswaContext)

    const {fetchData,deleteData} = functions
    
    useEffect( () => {

        if(alert.show) {
            setTimeout(() => {
                setAlert(clearAlert)
            },5000)
        }

        if(fetchStatus) {
            fetchData()
            setFetchStatus(false)
        }

    },[fetchStatus,setFetchStatus])

    const handleDelete = (event) => {
      var idMahasiswa = parseInt(event.target.value)
      deleteData(idMahasiswa)
      setAlert({
          show: true,
          type: 'delete'
      })
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
      history.push(`tugas15/edit/${idMahasiswa}`)
    }
  
    return (
        <>
            {mahasiswa!== null && (
                <div className='crud-container'>
                    <div className='table-container'>
                    <Link to='/tugas15/create'>
                        <button type="button" className="mt-10 py-2 px-4 w-full  bg-black hover:bg-black focus:ring-black focus:ring-offset-black text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                            Create Data
                        </button>
                    </Link> 
                    <table className="table p-4 mt-6 bg-white shadow rounded-lg">
                        <thead>
                            <tr>
                                <th className="border-b-2 p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                NO
                                </th>
                                <th className="border-b-2 p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                NAME
                                </th>
                                <th className="border-b-2 p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                COURSE
                                </th>
                                <th className="border-b-2 p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                SCORE
                                </th>
                                <th className="border-b-2 p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                INDEX SCORE
                                </th>
                                <th className="border-b-2 p-5 text-left dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                                ACTION
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    mahasiswa.map( (element,index) => {
                                        return (
                                            <tr key={element.id} className="text-gray-700">
                                                <td className="border-b-2 p-5 dark:border-dark-5">
                                                {index+1}
                                                </td>
                                                <td className="border-b-2 p-5 dark:border-dark-5">
                                                {element.name}
                                                </td>
                                                <td className="border-b-2 p-5 dark:border-dark-5">
                                                {element.course}
                                                </td>
                                                <td className="border-b-2 p-5 dark:border-dark-5">
                                                {element.score}
                                                </td>
                                                <td className="border-b-2 p-5 dark:border-dark-5">
                                                {indexScore(element.score)}
                                                </td>
                                                <td className="border-b-2 p-5 dark:border-dark-5">
                                                    <button onClick={handleEdit} value={element.id} type="button" className="px-4 py-2  bg-white-600 hover:bg-white-700 focus:ring-white-500 focus:ring-offset-white-200 text-black w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        Edit
                                                    </button>
                                                    <button onClick={handleDelete} value={element.id} type="button" className="px-4 py-2 ml-3  bg-red-700 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-auto transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    
                    {(() => {
                        if (alert.show && (alert.type === 'created' || alert.type === 'edited')) {
                        return (
                            <div className="alert-left bg-green-200 border-green-600 text-green-600 border-l-4 py-4 px-7" role="alert">
                                <p className="font-bold">
                                    Success
                                </p>
                                <p>
                                    Data has been {alert.type}
                                </p>
                            </div>
                        )
                        } else if (alert.show && alert.type === 'delete') {
                        return (
                            <div className="alert-left bg-red-200 border-red-600 text-red-600 border-l-4 py-4 px-7" role="alert">
                                <p className="font-bold">
                                    Success
                                </p>
                                <p>
                                    Data has been deleted
                                </p>
                            </div>
                        )
                        }
                    })()}

                </div>
            )}
        </>
    )
}

export default MahasiswaList15