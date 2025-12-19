// localStorage.setItem("name", "ahmed");
// localStorage.setItem("theme", "dark");
// localStorage.setItem("course", "js");



// var userName = localStorage.getItem("name");
// console.log(userName)

// var theme = localStorage.getItem("theme");
// console.log(theme)



// // localStorage.removeItem("course");
// // localStorage.clear()

// for (i = 0; i < localStorage.length; i++) {
//     var key = localStorage.key(i);
//     console.log(`${key} , ${localStorage.getItem(key)}`)
// }



sessionStorage.setItem("name", "ahmed");
sessionStorage.setItem("theme", "dark");

// sessionStorage.removeItem("name")
sessionStorage.clear()


for(i=0 ; i< sessionStorage.length ; i++){
    var key = sessionStorage.key(i);
    console.log(`${key} - ${sessionStorage.getItem(key)}`)
}
