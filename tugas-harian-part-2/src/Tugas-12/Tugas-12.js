import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Tugas12 = () => {
    var clearForm = {
        name: '', 
        course: '', 
        score: 0
    }

    const [mahasiswa, setMahasiswa] = useState([])
    const [inputMahasiswa, setInputMahasiswa] = useState(clearForm)
    const [currentId, setCurrentId] = useState(null)

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios.get('http://backendexample.sanbercloud.com/api/student-scores')

            // setMahasiswa(response.data)

            setMahasiswa(response.data.map( el => {
                return {
                    id: el.id,
                    name: el.name,
                    course: el.course,
                    score: el.score
                }
            }))
        }

        fetchData()
    },[])

    // console.log(mahasiswa)
    // console.log(inputMahasiswa)
  
    const handleDelete = (event) => {
      var idMahasiswa = parseInt(event.target.value)
      let url = 'http://backendexample.sanbercloud.com/api/student-scores/' + idMahasiswa

      axios.delete(url).then(() => {
        let newMahasiswa = mahasiswa.filter( el => {return el.id !== idMahasiswa})
        setMahasiswa(newMahasiswa)
      }).catch(error => {
          console.log(error.message)
      })
    }
  
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
  
    const handleSubmit = (event) => {
      event.preventDefault()

      let validate = checkData()

      if(validate.value === false) {
        alert(validate.message)
      } else {
  
        if (currentId === null) {
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
        } else {
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

        setInputMahasiswa(clearForm)
        setCurrentId(null)
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
            
                    {/* Form */}
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
            )}
        </>
    )
}

export default Tugas12