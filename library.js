document.getElementById("myForm").addEventListener("click", (event) =>{
  event.preventDefault()
});

const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}
// add book to library array
function addBook() {
  const title = document.getElementByName("title").value;
  const author = document.getElementByName("author").value;
  const pages = document.getElementByName("pages").value;
  const status = document.getElementByName("status").value;

  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
   console.log(newBook);

}


  // do stuff here
  

function createTable() {
  const table = document.createElement("table");

  for (let i = 0; i < myLibrary.length; i++){
    
  }
}



console.log(myLibrary);













function openForm() {
    document.getElementById("myForm").style.display = "flex";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function hideButton() {
    document.getElementById("open-button").style.visibility = "hidden";
}
