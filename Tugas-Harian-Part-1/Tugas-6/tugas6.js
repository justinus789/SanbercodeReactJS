// Soal 1
var nilaiJohn = 80
var nilaiDoe = 50

// Jawaban Soal 1
if(nilaiJohn >= 80) {
    console.log("Index nilai John adalah A")
} else if(nilaiJohn >= 70) {
    console.log("Index nilai John adalah B")
} else if(nilaiJohn >= 60) {
    console.log("Index nilai John adalah C")
} else if(nilaiJohn >= 50) {
    console.log("Index nilai John adalah D")
} else {
    console.log("Index nilai John adalah E")
}

if(nilaiDoe >= 80) {
    console.log("Index nilai Doe adalah A")
} else if(nilaiDoe >= 70) {
    console.log("Index nilai Doe adalah B")
} else if(nilaiDoe >= 60) {
    console.log("Index nilai Doe adalah C")
} else if(nilaiDoe >= 50) {
    console.log("Index nilai Doe adalah D")
} else {
    console.log("Index nilai Doe adalah E")
}

// Soal 2
var tanggal = 1
var bulan = 1
var tahun = 1999

// Jawaban Soal 2
switch(bulan) {
    case 1 : { console.log(`${tanggal} Januari ${tahun}`); break;}
    case 2 : { console.log(`${tanggal} Februari ${tahun}`); break;}
    case 3 : { console.log(`${tanggal} Maret ${tahun}`); break;}
    case 4 : { console.log(`${tanggal} April ${tahun}`); break;}
    case 5 : { console.log(`${tanggal} Mei ${tahun}`); break;}
    case 6 : { console.log(`${tanggal} Juni ${tahun}`); break;}
    case 7 : { console.log(`${tanggal} Juli ${tahun}`); break;}
    case 8 : { console.log(`${tanggal} Agustus ${tahun}`); break;}
    case 9 : { console.log(`${tanggal} September ${tahun}`); break;}
    case 10 : { console.log(`${tanggal} Oktober ${tahun}`); break;}
    case 11 : { console.log(`${tanggal} November ${tahun}`); break;}
    case 12 : { console.log(`${tanggal} Desember ${tahun}`); break;}
    default : { console.log('Bulan tidak diketahui'); break;}
}

// Soal 3 & Jawaban Soal 3
var i = 0
console.log('LOOPING PERTAMA')
while(i < 20) {
    i+=2
    console.log(`${i} - I love coding`)
}

console.log('LOOPING KEDUA')
for(var j = 20; j>0; j-=2){
    console.log(`${j} - I will become a frontend developer`)
}


// Soal 4 & Jawaban Soal 4
for(var k = 1; k<= 20; k++) {
    if(k % 3 === 0 && k % 2 === 1) {
        console.log(`${k} - I Love Coding`)
    } else if(k % 2 === 0) {
        console.log(`${k} - Berkualitas`)
    } else if ( k % 2 === 1) {
        console.log(`${k} - Santai`)
    }
}

// Soal 5 & Jawaban Soal 5
for(val = '#'; val.length <= 7; val += '#') {
    console.log(val)
}