const library = [];
const container = document.querySelector('#container');
let bookId = 0;
//const card = document.createElement('div');

function Book(title, author, id) {
	this.title = title;
  this.author = author;
  this.id = id;
}

function getBook() {
	let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let id = bookId;
  bookId++;
  let book = new Book(title, author, id);
  library.push(book);
  console.log(library);
  addBook();
}

function addBook() {
container.innerHTML = '';
	library.forEach(book => {
  	const card = document.createElement('div');
    card.setAttribute('name', book.title);
		card.innerHTML = `<h1>${book.title}</h1>
		<p>Author: ${book.author}</p>
    <button id='deleteBtn' onclick='deleteBook(this)'>Delete</button>`;
    card.className = 'bookCard';
    card.setAttribute('id', book.id)
    container.append(card);
	})
  
}

function deleteBook(element) {
	let bookToBeRemoved = 
  	library.find(book => book.title == element.parentNode.name);
   library.splice(bookToBeRemoved, 1);
	element.parentNode.remove();
  
}