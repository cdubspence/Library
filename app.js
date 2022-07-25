const form = document.getElementById('myForm');
const div = document.createElement('div');
const container = document.querySelector('.container');


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

}

function openForm() {
    form.style.visibility = 'visible';
    container.style.backgroundColor = '#000';
    container.style.opacity = '.5';
}

function closeForm() {
    form.style.visibility = 'hidden';
    container.style.opacity = '1';
    container.style.backgroundColor = 'white';
}
