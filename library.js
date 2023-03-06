const myLibrary = [];

const addBookbtn = document.querySelector(".open-button");
const bookCardcontainer = document.querySelector(".bookcard-container");
const submitBtn = document.querySelector(".submit");




function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
// add book to library array
function addBook(i) {
  document.getElementById("myForm").addEventListener("click", (event) =>{
    event.preventDefault()
    closeForm(); 
    bookCardcontainer.style.display = "flex";
  });
  const bookCard = document.createElement("div");
  
  bookCard.classList.add("book");
  bookCard.setAttribute("data-index", `${i}`);

  const title = document.querySelector("[name=\"title\"]").value;
  const titleText = document.createElement("h2");
  titleText.innerHTML = `Title: ${title}`;

  const author = document.querySelector("[name=\"author\"]").value;
  const authorText = document.createElement("h3");
  authorText.innerHTML = `Author: ${author}`;


  const pages = document.querySelector("[name=\"pages\"]").value;
  const pagesText = document.createElement("h3");
  pagesText.innerHTML = `Pages: ${pages}`;


  const status = document.querySelector("[name=\"status\"]").value;
  const statusText = document.createElement("h3");
  statusText.innerHTML = `Read? ${status === "YES" ? "Yes" : "no" }`;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = "<i class=\"fa-solid fa-trash-can\"></i>";
  deleteButton.addEventListener("click", () => {
    bookCardcontainer.removeChild(bookCard, 1);
  });

  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  bookCard.appendChild(titleText);
  bookCard.appendChild(authorText);
  bookCard.appendChild(pagesText);
  bookCard.appendChild(statusText);
  bookCard.appendChild(deleteButton);
  bookCardcontainer.appendChild(bookCard);
}

function openForm() {
    document.getElementById("myForm").style.display = "flex";
    document.getElementById("open-button").style.display = "none";
    bookCardcontainer.style.display = "none";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("open-button").style.display = "block";
}



