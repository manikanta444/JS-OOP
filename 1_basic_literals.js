// const s1='Hello';
// console.log(typeof s1);

// const s2= new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert('manikanta');
// console.log(navigator.appVersion);

//  object literal
const book1={
    title:'Book One',
    author:'John Doe',
    year: '1996',
    getSummary: function(){
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
};

// console.log(book1.getSummary());

const book2={
    title:'Book two',
    author:'Jane Doe',
    year: '2004',
    getSummary: function(){
        return `${this.title} was written by ${this.author}
        in ${this.year}`;
    }
};

// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));