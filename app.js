const form = document.getElementById('myForm');
const container = document.querySelector('.container');
const library = document.querySelector('.library');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const removeBtn = document.getElementById('removeBtn');
let bookId = 0;
const books = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: '304',
        id: 0
    },
];

function Book(title, author, pages, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = bookId;
}

function addBook() {
	let book = new Book(title.value, author.value, pages.value);
    books.push(book);
    console.log(books);
    //revert page style after subbmitting book info
    form.style.visibility = 'hidden';
    container.style.opacity = '1';
    container.style.backgroundColor = 'rgb(180, 25, 46)';
    render(book);
    clearForm();
}

function removeBook() {
    let pickedBookId = parseInt(removeBtn.dataset.id);
    console.log(pickedBookId);
    books.splice(pickedBookId, 1)
    console.log(books);
}

function render(book) {
    let card = document.createElement('div');
    card.className = 'card';
    bookId += 1;
    card.dataset.id = bookId;
    book.id = bookId;

    //Create card content with user input
    let cardContent = document.createElement('div');
    cardContent.className = 'cardContent';
    cardContent.innerHTML = `<h1> ${book.title} </h1>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    Read: <input id="read" type="checkbox" checked><br>
    <button id='removeBtn' data-id='${bookId}' onclick='removeBook()'>Delete</button>`

    //Update DOM and return CSS style
    card.appendChild(cardContent);
    library.append(card);
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
