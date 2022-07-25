//this is a basic constructor for creating a libary of books!
const div = document.querySelector('.container');
const library = []
const newDiv = document.createElement('div')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
	let book = new Book();
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('pages').value;

    console.log(book)
    newDiv.innerHTML += `<h1>${book.title}</h1> <p> ${book.author}, ${book.pages}</p>`
    div.append(newDiv)
}
