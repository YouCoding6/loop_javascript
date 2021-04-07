const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 },
];


const compare = (a, b) => {

    if (a.title > b.title) {
        return 1
    }
    else if (a.title < b.title) {
        return -1
    }
    else {
        return 0
    }

}


console.log(books.sort(compare))

const books_rented_at_least_once = (array) => {
    var rent = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index].rented != 0) {
            rent = rent + 1
        }
    }
    if (rent == 0)
        console.log("Non")
    else
        console.log("Oui")
}

books_rented_at_least_once(books)

const book_more_rented = (array) => {
    var max = 0
    var i = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index].rented > max) {
            max = array[index].rented
            i = index
        }
    }
    console.log("Le livre le plus emprunté est: " + array[i].title)
}

book_more_rented(books)

const book_less_rented = (array) => {
    var min = array[0].rented
    var i = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index].rented < min) {
            min = array[index].rented
            i = index
        }
    }
    console.log("Le livre le moins emprunté est: " + array[i].title)
}

book_less_rented(books)

const list_final_of_books = (array) => {
    var new_list_of_book = []
    for (let index = 0; index < array.length; index++) {
        if (array[index].id != 133712)
            new_list_of_book.push(array[index])
    }
    console.log(new_list_of_book)
}

list_final_of_books(books)

