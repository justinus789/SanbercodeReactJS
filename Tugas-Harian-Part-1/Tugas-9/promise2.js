// Soal 3
function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
      var books=[
          {name: "shinchan", totalPage: 50, isColorful: true},
          {name: "Kalkulus", totalPage: 250, isColorful: false},
          {name: "doraemon", totalPage: 40, isColorful: true},
          {name: "algoritma", totalPage: 250, isColorful: false},
      ]
      if (amountOfPage >= 40) {
          resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
          var reason= new Error("Maaf buku di bawah 40 halaman tidak tersedia")
          reject(reason);
        }
    });
}

// Jawaban Soal 3
const execute = async (colorful, amountOfPage) => {
    try {
        const response = await filterBooksPromise(colorful,amountOfPage)
        console.log(response)
    }catch(error) {
        console.log(error.message)
    }
}

execute(true, 40)
execute(false, 250)
execute(true, 30)