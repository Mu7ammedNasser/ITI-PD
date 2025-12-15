// // function test(x, y) {
// //     x("hello my developers");
// //     y();
// // }

// // function num1(a) {
// //     console.log("num1", a);
// // }

// // function num2() {
// //     console.log("num2")
// // }

// // test(num1, num2)





// // for (i = 0; i < 5; i++) {
// //     console.log(i)
// // }
// // console.log(i)


// // var arr = [1, 2, 3];

// // arr.forEach(function (element, index, array) {
// //     array[index] +=1
// //     console.log(element)
// //     console.log(index);
// //     console.log(array);
// // })

// // console.log(arr)
// // arr.forEach()


// // DOM
// // var myElement = document.children[0].children[1].children[0];
// // var secondElement = document.firstChild;

// // console.log(myElement);
// // console.log(secondElement)


// var myDiv = document.getElementsByClassName("my-div")[0];
// console.log(myDiv)

// var myId = document.getElementById("id-div");
// console.log(myId);

// var tagName = document.getElementsByTagName("a")[0];
// console.log(tagName);

// var queryID = document.querySelector("#id-div");
// console.log(queryID);

// var queryClass = document.querySelector(".my-div");
// console.log(queryClass);

// var allQueries = document.querySelectorAll("span")[0];
// console.log(allQueries);



// var myAnchor = document.getElementById("my-a");
// console.log(myAnchor);

// myAnchor.setAttribute("href","#");
// console.log(myAnchor.getAttribute("href"));

// myAnchor.href = "https://www.youtube.com/";

// var myP = document.getElementById("id-div");
// console.log(myP);

// myP.classList.add("red-class");
// myP.classList.remove("red-class");



// myP.style.backgroundColor ="green";


// create element

// var myH2 = document.createElement("h2");
// myH2.innerText = 'hello'
// myH2.style.backgroundColor = "red";

// var body = document.body;
// console.log(body);
// console.log(myH2);

// body.appendChild(myH2);

// var myNewElement = document.createElement("h1");
// myNewElement.textContent = "hello developers";
// document.body.appendChild(myNewElement)



var myH1 = document.getElementById("h1-id");


var copy = myH1.cloneNode(true);
document.body.appendChild(copy);



// function alertData(e) {
//     console.log(e);
//     console.log(this);
// }


// function h1Click(){
    
// }
myH1.addEventListener("click", function (e) {
    console.log(this)
    console.log(e.target);
})