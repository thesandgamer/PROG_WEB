const fs = require('fs');

const book = {
    title: "Le discours de la méthode",
    author: "René Descard"
}


//console.log(bookData);

//Json to object: 
const parsedData = JSON.parse(bookData);
//console.log(parsedData.title);


//Ecriture
const bookData = JSON.stringify(book);//On converti en JSON notre book
fs.writeFileSync("book.json",bookData);//On écrit les data converti en string

//lecture
const dataBuffer = fs.readFileSync('book.json');
const dataJSON = dataBuffer.toString();
const loadedBook = JSON.parse(dataJSON);
console.log(loadedBook.author);