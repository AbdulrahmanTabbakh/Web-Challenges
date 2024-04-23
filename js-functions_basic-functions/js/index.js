console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// // --v-- write your code here --v--
const bookTitle = "Educated";
const author = "Tara Westover";
let rating = 2.0;
let numberSales = 1099;

console.log("Booktitle is:" + bookTitle);
console.log("author:" + author);
console.log("rating:" + rating);
console.log("number of sales:" + numberSales);

// --^-- write your code here --^--

/*Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

++numberSales;
rating += 0.1;
console.log(numberSales, rating);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log("Booktitle is:" + bookTitle);
  console.log("author:" + author);
  console.log("rating:" + rating);
  console.log("number of sales:" + numberSales);
}

logBookData();

numberSales = numberSales + 5;

logBookData();

numberSales++;

logBookData();

// --^-- write your code here --^--
