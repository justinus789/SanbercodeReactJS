import React, {useState} from 'react';

const Tugas11 = () => {
    var daftarBuah = [
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
      ]

    var clearForm = {
        nama: '', 
        hargaTotal: '', 
        beratTotal: 0
    }

    const [buah, setBuah] = useState(daftarBuah)
    const [inputBuah, setInputBuah] = useState(clearForm)
    const [currentIndex, setCurrentIndex] = useState(-1)

    // const clearForm = (form) => {
    //     form.nama = ''
    //     form.hargaTotal = ''
    //     form.beratTotal = ''
    // }
  
    const handleDelete = (event) => {
      let index = parseInt(event.target.value)
      let deletedItem = buah[index]
      let newData = buah.filter((e) => {return e !== deletedItem})
      setBuah(newData)
    }
  
    const handleChange = (event) => {
        const {name , value} = event.target
        setInputBuah( prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const checkData = () => {
        var data = {
            value : true,
            message : ''
        }

        if(inputBuah.nama === '' || inputBuah.hargaTotal === '' || inputBuah.beratTotal === '') {
            data.value = false
            data.message = 'Semua inputan wajib diisi!'
        } else if(parseInt(inputBuah.beratTotal) < 2000) {
            data.value = false
            data.message = 'Inputan total berat minimal 2 kg!'
        }

        return data
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()

      let validate = checkData()

      if(validate.value === false) {
        alert(validate.message)
      } else {
        let newData = buah
  
        if (currentIndex === -1) {
            newData = [...buah, inputBuah]
            console.log(`Menambahkan buah baru`)
        } else {
            newData[currentIndex] = inputBuah
            console.log(`Mengubah buah ke-${parseInt(currentIndex)+1}`)
        }
        setBuah(newData)
        setInputBuah(clearForm)
        setCurrentIndex(-1)
      }
    }
  
    const handleEdit = (event) => {
      let index = parseInt(event.target.value)
      let editValue = buah[index]
      setInputBuah(editValue)
      setCurrentIndex(event.target.value)
    }
  
    return (
      <div className='crud-container'>
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga total</th>
              <th>Berat total</th>
              <th>Harga per kg</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {
              buah.map((val, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{val.nama}</td>
                    <td>{val.hargaTotal}</td>
                    <td>{val.beratTotal/1000} Kg</td>
                    <td>{parseInt(val.hargaTotal/(val.beratTotal/1000))}</td>
                    <td>
                      <button onClick={handleEdit} value={index}>Edit</button>
                      <button onClick={handleDelete} value={index}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
  
        {/* Form */}
        <h1>Form Daftar Harga Buah</h1>
        <form className='form-buah' onSubmit={handleSubmit}>
          <label>
            Nama:
          </label>
          <input type="text" name='nama' value={inputBuah.nama} onChange={handleChange}/>
          <label>
            Harga Total:
          </label>
          <input type="text" name='hargaTotal' value={inputBuah.hargaTotal} onChange={handleChange}/>
          <label>
            Berat Total (dalam gram):
          </label>
          <input type="text" name='beratTotal' value={inputBuah.beratTotal} onChange={handleChange}/>
          <button>submit</button>
        </form>
      </div>
    )
  }
  export default Tugas11