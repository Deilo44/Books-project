let myLibrary=[];

function Book(title,author,pages,status){
  this.title =title
  this.author =author
  this.pages =pages
  this.status =status
}
Book.prototype.info=function(){
  console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`)
}

function addBookToLibrary(){
  
}

const Book1= new Book('The Hobbit','J.R.R. Tolkien','295','not read yet')
const Book2= new Book('Harry Poter','Same hot British chic','500','finsihed reading')