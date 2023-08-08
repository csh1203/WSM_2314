// const bookId = new URL(window.location.href);
// const param = bookId.searchParams;
// const number = parseInt(param.get('book')) -1;
// console.log(number);
// console.log(`bookId: ${bookId}`);

// URL에 있는 book parameter 값(string) : bookId
let url_href = window.location.href;    // 브라우저 창에 있는 주소
const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId : ${bookId}, type : ${typeof bookId}`); // "3", string

// -> string을 number로 변환 : bookIdNumber
let bookIdNumber = parseInt(bookId);
// let bookIdNumber = Number(bookId);
// let bookIdNumber = bookId * 1
console.log(`bookId : ${bookIdNumber}, type : ${typeof bookIdNumber}`); //3, number

// -> books에서 하나씩 꺼내어 boodIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자 : bookData
// bookIdNumber : URL에서 가져온 id값 === books 하나씩 꺼낸 book의 id값
let bookData;
for(let book of books){
    if(bookIdNumber === book.id) {
        bookData = book;    // id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);

// -> title, author, publisher, bookImage 알아내자
let title = bookData.title;
// let title = bookData["title"];
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
// HTML 요소 -> js 변서
const titleDIV = document.getElementsByClassName("title")[1];  
titleDIV.innerHTML = title;

const authorDIV = document.getElementsByClassName("author")[1];
authorDIV.innerHTML = author;

const publisherDIV = document.getElementsByClassName("publisher")[1];
publisherDIV.innerHTML = publisher;

const bookImageDIV = document.getElementsByClassName("book-image")[0];
bookImageDIV.innerHTML = `<img src="${bookImage}"/>`;

// let name = "최유진";
// console.log(`안녕, ${name}`);