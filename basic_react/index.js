// // const x = [2, 4, 5, 6].map((el) => el * 2);
// // console.log(x);
// // const titles = books.map((book) => ({
// //   titles: book.title,
// //   page: book.pages,
// // }));
// // console.log(titles);
// // const pages = books
// //   .filter((book) => book.pages > 500)
// //   .filter((book) => book.movie);
// // console.log(pages);
// // const advanture = books
// //   .filter((books) => books.type.include(advanture))
// //   .map((book) => book.title);
// // console.log(advanture);

// const data = [
//   {
//     id: 1,
//     title: "lorem",
//     pages: 444,
//   },
//   {
//     id: 2,
//     title: "lorem",
//     pages: 444,
//   },
//   {
//     id: 3,
//     title: "lorems",
//     pages: 544,
//     movie: true,
//     type: ["advanture", "dram"],
//   },
// ];

// function getBooks() {
//   return data;
// }
// const books = getBooks();
// books;

// const datas = books.map((book) => book.pages);
// console.log(datas);
// const getdata = books.filter((book) => book.type);
// getdata;
// //const alldata = books.filter((books) => books.type.includes(advanture).map((book)=>book.title))
// const pages = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.title);
// pages;
// const pagesAll = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAll);

// const array = [3, 2, 5, 8, 9];
// const sorted = array.slice().sort((a, b) => b - a);
// console.log(sorted);
// array;

// const arrbook = books.slice().sort((a, b) => b.pages - a.pages);
// arrbook;
// books;
// const newbooks = {
//   id: 4,
//   title: "loremjhsbhxs",
//   pages: 994,
//   movie: false,
//   type: ["advanture", "action", "dram"],
// };

// const booksafter = [...books, newbooks];
// booksafter;

// const bookdelete = booksafter.map((book) => book.id !== 3);
// bookdelete;

// const updatebooks = bookdelete.map((book) =>
//   book.id === 1 ? { ...books, pages: 20 } : books
// );
// updatebooks;
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((rs) => rs.json())
//   .then((data) => console.log(data));

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }
// getData();

// function learn(birthday) {
//   return 2034 - birthday;
// }
// const age = learn(1990);
// console.log(age);

// const data = function (birthday) {
//   return 2033 - birthday;
// };
// const age2 = data(1980);
// console.log(age2);
