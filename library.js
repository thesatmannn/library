const myLibrary = [];
const myTable = document.querySelector("#table");

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
    myForm.style.display = "none";
  });
  let bookCard = document.createElement("div");
  bookCard.classList("book");
  bookCard.setAttribute("data-index", `${i}`);

  const title = document.querySelector("[name=\"title\"]").value;
  let titleText = document.createElement("h3");
  titleText.innerHTML = `title: ${title}`;

  const author = document.querySelector("[name=\"author\"]").value;
  let authorText = document.createElement("h3");
  authorText.innerHTML = `author: ${author}`;


  const pages = document.querySelector("[name=\"pages\"]").value;
  let pagesText = document.createElement("h3");
  pagesText.innerHTML = `pages: ${pages}`;


  const status = document.querySelector("[name=\"status\"]").value;
  let statusText = document.createElement("h3");
  titleText.innerHTML = `title: ${title}`;


  const newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
 closeForm();
}

const staticBook = Book('Mandibles', 'Lionel Shriever' , '356', 'on' );


for(let i = 0; i < myLibrary.length; i++){
  

}

// creates div from array elements
function displayCard() {
  myLibrary.forEach(element => {
    const newDiv = document.createElement("div");
    const cardText = document.createTextNode(
    
  });
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
