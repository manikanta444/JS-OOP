// constructor
function Book(title, author, year){
    this.title=title;
    this.author=author;
    this.year=year;

    this.getSummary=function(){
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
}

//  Intialized an Object
const book1=new Book('Book One', 'john doe', '2013');
const book2=new Book('book two', 'jane doe', '2001');

console.log(book2);