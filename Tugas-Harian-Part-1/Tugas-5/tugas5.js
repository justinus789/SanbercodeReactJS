// Soal 1
let word = 'JavaScript' 
let second = 'is' 
let third = 'awesome' 
let fourth = 'and' 
let fifth = 'I' 
let sixth = 'love' 
let seventh = 'it!'

// Jawaban soal 1
const result1 = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`
console.log(result1)

// Soal 2
let kataPertama = "saya" 
let kataKedua = "senang" 
let kataKetiga = "belajar" 
let kataKeempat = "javascript"

// Jawaban Soal 2
kataKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1)
kataKetiga = kataKetiga.slice(0,-1) + kataKetiga.charAt(kataKetiga.length - 1).toUpperCase()
kataKeempat = kataKeempat.toUpperCase()

const result2 = `${kataPertama} ${kataKedua} ${kataKetiga} ${kataKeempat}`
console.log(result2)

// Soal 3
let panjangPersegiPanjang = "8"
let lebarPersegiPanjang = "5"

let alasSegitiga= "6"
let tinggiSegitiga = "7"

// Jawaban Soal 3
let kelilingPersegiPanjang = 2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang))
let luasSegitiga = parseFloat((parseInt(alasSegitiga) * parseInt(tinggiSegitiga)) / 2)
console.log(kelilingPersegiPanjang)
console.log(luasSegitiga)

// Soal 4
let sentences= 'wah javascript itu keren sekali' 

// Jawaban Soal 4
let firstWords= sentences.substring(0, 3) 
let secondWords = sentences.substring(4,14) 
let thirdWords = sentences.substring(15,18) 
let fourthWords = sentences.substring(19,24) 
let fifthWords = sentences.substring(25,31) 

console.log('Kata Pertama: ' + firstWords) 
console.log('Kata Kedua: ' + secondWords) 
console.log('Kata Ketiga: ' + thirdWords) 
console.log('Kata Keempat: ' + fourthWords) 
console.log('Kata Kelima: ' + fifthWords)

// Soal 5
var sentence = "I am going to be React JS Developer" 

// Jawaban Soal 5
var exampleFirstWord = sentence[0]  
var exampleSecondWord = sentence[2] + sentence[3]   
var thirdWord = sentence[5] + sentence[6] +  sentence[7] + sentence[8] +sentence[9] 
var fourthWord = sentence[11] + sentence[12]
var fifthWord = sentence[14] + sentence[15]
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]
var seventhWord = sentence[23] + sentence[24]
var eighthWord = sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + 
                sentence[32] + sentence[33] + sentence[34]

console.log('First Word: ' + exampleFirstWord) 
console.log('Second Word: ' + exampleSecondWord) 
console.log('Third Word: ' + thirdWord) 
console.log('Fourth Word: ' + fourthWord) 
console.log('Fifth Word: ' + fifthWord) 
console.log('Sixth Word: ' + sixthWord) 
console.log('Seventh Word: ' + seventhWord) 
console.log('Eighth Word: ' + eighthWord)

// Soal 6
let txt = "I can eat bananas all day"
let hasil = txt.slice(10,17) //lakukan pengambilan kalimat di variable ini

console.log(hasil)
