const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

console.log(navToggleI);
console.log(navListUl);
// .nav-toggle 클릭하면
nav_toggle.onclick = () => {
    // .nav-toggle i 햄버거 메뉴 <-> X
    // class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    // .nav-list에 .show-menu toggle
    navListUl.classList.toggle("show-menu");
}


// HTML -> JS
// 1. id
//  const navToggleDiv = document.getElementById("nav-toggle");
//  nav toggle --> js에서 
// 2. class
//  const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; //클래스는 요소가 많은 수 있기 때문에 배열로 나타남. 요소를 건들기 위해서는 배열에서 꺼내줘야 됨
// 3. tag
//  const navToggleDiv = document.getElementsByTagName("div")[0]; //이것도 div태그를 많이 쓸 수 있기 때문에 배열로 나타남
// 4. CSS selector
//  const navToggleDiv = document.querySelector("#nav-toggle"); //querySelector는 한 개 --> id로 가져옴
//  const navToggleDiv = document.querySelectorAll(".nav-toggle")[0]; //querySelectorAll은 여러 개 --> class 혹은 tag로 가져옴
//  const navToggleDiv = document.querySelectorAll("div")[0];
// 5. XPath
//  브라우저에서 요소를 가리키는 값을 가져옴

// nav_toggle.onclick = () => alert("안녕");
// nav_toggle.onclick = alert("안녕");

//'안녕'아리는 창을 띄우는 함수를 실행해라
// function sayHello(){
//     alert("안녕");
// }
// nav_toggle.onclick = sayHello;  //sayHello가 아닌 sayHello()로 하면 창을 열자마자 alert창을 띄움. 

// nav_toggle.onclick = function (){ //위와 똑같음
//     alert("안녕");
// }; 

// nav_toggle.onclick = () => { //위와 똑같음
//     alert("안녕");
// };

// nav_toggle.onclick = () => alert("안녕"); //위 과정이 단축되어 이렇게 된 것 --> 이것은 함수

