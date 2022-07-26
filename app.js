const form = document.getElementById('myForm');
const div = document.createElement('div');
const container = document.querySelector('.container');
const library = document.getElementById('library');


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBook() {
	let book = new Book();
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('pages').value;

    let card = document.createElement('div');
    card.className = 'card';

    let cardContent = document.createElement('div');
    cardContent.className = 'cardContent';
    cardContent.innerHTML = `<h1> ${book.title} </h1>`,
                            `<p> ${book.author}</p>`,
                            `<p> ${book.pages}</p>`

    card.appendChild(cardContent);
    library.append(card);

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
}
