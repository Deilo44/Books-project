let myLibrary=["yeahahahaha","hehehehehehhe","hfhfgfhfgfhfgfhfgfhfg","utututututututut"];

function Book(title,author,pages,status){
  this.title =title
  this.author =author
  this.pages =pages
  this.status =status
}
Book.prototype.info=function(){
  return `${this.title} "by " ${this.author}", "${this.pages} "pages, "${this.status}`;
}

function addBookToLibrary(){
  const bookTitle=prompt("Book title please?");
  const bookAuthor=prompt("Book Author please?");
  const bookPages=prompt("Number of pages please?");
  const bookStatus=prompt("Have you read the book? Type Yes or No");

  const newBook=bookTitle +" by "+bookAuthor+", "+ bookPages+ " Reading status "+bookStatus;
  myLibrary.push(newBook);
  
}
document.addEventListener("DOMContentLoaded", function(){
  var button= document.getElementById("add");
  button.addEventListener("click", function(){
    addBookToLibrary();
  });
});

function display(myLibrary){
  let result="";
  for(let i=myLibrary.length-1; i>0; i--){
     var first = myLibrary[i];
     result += "<p>" + first + "</p><br>";
    return result;
  }
}
document.addEventListener("DOMContentLoaded", function(){
  var items=document.getElementById("cards");
  items.innerHTML=display(myLibrary);
  });