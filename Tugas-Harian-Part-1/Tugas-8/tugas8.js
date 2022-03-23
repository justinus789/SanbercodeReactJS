// Soal 1
const luasPersegiPanjang = (panjang,lebar) => {
    return panjang * lebar
}

const kelilingPersegiPanjang = (panjang,lebar) => {
    return 2 * (panjang + lebar)
}

const volumeBalok = (panjang,lebar,tinggi) => {
    return panjang * lebar * tinggi
}
 
let panjang= 12
let lebar= 4
let tinggi = 8
 
let HasilluasPersegiPanjang = luasPersegiPanjang(panjang, lebar)
let HasilkelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar)
let HasilvolumeBalok = volumeBalok(panjang, lebar, tinggi)

console.log(HasilluasPersegiPanjang ) 
console.log(HasilkelilingPersegiPanjang )
console.log(HasilvolumeBalok )

// Soal 2
const introduce = (...rest) => {
    var [names, age, gender, job] = rest
    var title;
    if(gender === 'Laki-Laki') {
        title = "Pak"
    } else if(gender === 'Perempuan') {
        title = "Bu"
    }
    return `${title} ${names} adalah seorang ${job} yang berusia ${age} tahun`
}
 
//kode di bawah ini jangan dirubah atau dihapus
const perkenalan = introduce("John", "30", "Laki-Laki", "penulis")
console.log(perkenalan) // Menampilkan "Pak John adalah seorang penulis yang berusia 30 tahun"

// Soal 3
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    'jenis kelamin' : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    'tahun lahir' : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)

// Soal 4
let buah = [
    {nama: 'Nanas', warna: 'Kuning', 'ada bijinya': 'tidak', harga: 9000},
    {nama: 'Jeruk', warna: 'Oranye', 'ada bijinya': 'ada', harga: 8000},
    {nama: 'Semangka', warna: 'Hijau & Merah', 'ada bijinya': 'ada', harga: 10000},
    {nama: 'Pisang', warna: 'Kuning', 'ada bijinya': 'tidak', harga: 5000},
]

console.log(buah.filter( el => el["ada bijinya"] === 'tidak'))

// Soal 5
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020,
    colors: ["Mystic Bronze", "Mystic White", "Mystic Black"]
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 /* Tulis kode jawabannya di sini */
 let {name:phoneName, brand: phoneBrand, year, colors} = phone
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(phoneBrand, phoneName, year, colors[2], colors[0]) 

 // Soal 6
let warna = ["biru", "merah", "kuning" , "hijau"]

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul:["hitam"]
}
// kode diatas ini jangan di rubah atau di hapus sama sekali

/* Tulis kode jawabannya di sini */ 
let {penulis, tahunTerbit} = dataBukuTambahan
let bukuComplete = {...buku, penulis, tahunTerbit}
console.log(bukuComplete)

// Soal 7
let tambahDataFilm = (name,hours,genre,year) => {
    return dataFilm.push({
        nama : name,
        durasi : hours,
        genre : genre,
        tahun : year
    });
}

let dataFilm = []

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")

console.log(dataFilm)