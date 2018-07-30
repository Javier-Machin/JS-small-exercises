function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return(`${title}, ${author}, ${pages}, ${read}`);
  }
}

const ASOIAF = new Book("ASOIAF", "Martin", 9349, "Already Read");

console.log(ASOIAF.info());