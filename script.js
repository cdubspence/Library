const library = [
    {
        title: 'The Hobbit',
        author: "J.R.R Tolkien",
        pages: '304'
    },
];
const lib = document.querySelector('.library');
const container = document.querySelector('.container');
const form = document.getElementById('myForm');
let bookId = 0;
//const card = document.createElement('div');

function Book(title, author, pages) {
	this.title = title;
    this.author = author;
    this.pages = pages;
}

function getBook() {
	let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let id = bookId;
    bookId++;
    let book = new Book(title, author, pages);
    library.push(book);
    console.log(library);
    addBook();
}

function addBook() {
    lib.innerHTML = '';
        library.forEach(book => {
            const card = document.createElement('div');
            card.setAttribute('name', book.title);
                card.innerHTML = `<h1>${book.title}</h1>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <button id='readStatus' onclick='readStatus()'>Read</button>
                <button id='deleteBtn' onclick='deleteBook(this)'>Delete</button>`;
            card.className = 'bookCard';
            card.setAttribute('id', book.id)
            lib.append(card);
        })
    closeForm()
}

function deleteBook(element) {
	let bookToBeRemoved = 
  	    library.find(book => book.title == element.parentNode.name);
    library.splice(bookToBeRemoved, 1);
	element.parentNode.remove();
  
}

function clearForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

function openForm() {
    form.style.visibility = 'visible';
    container.style.backgroundColor = 'rgb(180, 25, 46)';
    container.style.opacity = '.7';
}

function closeForm() {
    form.style.visibility = 'hidden';
    container.style.opacity = '1';
    container.style.backgroundColor = 'rgb(180, 25, 46)';
    clearForm();
}

function readStatus() {
    const readBtn = document.getElementById('readStatus');
    if(readBtn.textContent == 'Read') {
        readBtn.style.background = 'red';
        readBtn.textContent = 'Not Read'
    }
    else {
        readBtn.style.background = 'rgb(110, 223, 110)';
        readBtn.textContent = 'Read'
    }
    
}

addBook();