// constructor
function Book(title, author, year){
    this.title=title;
    this.author=author;
    this.year=year;
}

//  get summary
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author}
    in ${this.year}`;
};

//  Magazine Constructor
function Magazine(title,author,year,month){
    Book.call(this,title,author,year);

    this.month=month;
}

// Inherit prototype
Magazine.prototype=Object.create(Book.prototype);

//    Instantiate Magazine Object
const mag1 = new Magazine('MAg One', 'John Doe', '2016','Jan');

// Use Magazine Constructor
Magazine.prototype.Constructor=Magazine;

console.log(mag1);

