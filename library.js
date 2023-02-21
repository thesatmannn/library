
const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
// add book to library array
function addBook() {
  document.getElementById("myForm").addEventListener("click", (event) =>{
    event.preventDefault()
  });
  const title = document.querySelector("[name=\"title\"]").value;
  const author = document.querySelector("[name=\"author\"]").value;
  const pages = document.querySelector("[name=\"pages\"]").value;
  const status = document.querySelector("[name=\"status\"]").value;

  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);

  closeForm();
}


  // do stuff here
  

function createTable() {
  const table = document.createElement("table");

  for (let i = 0; i < myLibrary.length; i++){
    
  }
}
















function openForm() {
    document.getElementById("myForm").style.display = "flex";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function hideButton() {
    document.getElementById("open-button").style.visibility = "hidden";
}
