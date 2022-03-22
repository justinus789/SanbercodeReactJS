// Soal 1
let dataPeserta = ["john", "laki-laki", "programmer", "30"]

// Jawaban Soal 1
let [names, gender, job, age] = dataPeserta

let output = `Halo, nama saya ${names}. saya ${gender} berumur ${age} bekerja sebagai ${job} `

console.log(output)

// Soal 2
let array1 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

// Jawaban Soal 2
for(var i = 0; i < array1.length; i++) {
    console.log(array1[i])
}

// Soal 3
let array2 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

// Jawaban Soal 3
for(var j = 0; j < array2.length; j++) {
    if(array2[j] %2 === 0) {
        console.log(array2[j])
    }
}

// Soal 4
let kalimat= ["aku", "saya", "sangat", "sangat", "senang", "belajar", "javascript"]

// Jawaban Soal 4
kalimat.shift()
kalimat.splice(1,1)
console.log(kalimat)

// Soal 5
var sayuran=[]

// Jawaban Soal 5
sayuran.push(
    'Kangkung', 
    'Bayam', 
    'Buncis', 
    'Kubis', 
    'Timun',
    'Seledri',
    'Tauge'
    )
sayuran.sort()
for(var m = 0; m < sayuran.length; m++) {
    console.log(`${m+1}. ${sayuran[m]}`)
}