
// function f1(x) {
//     if (x > 3) {
//         var z = 3;
//     } else {
//         var zz = 3;
//     }
//     console.log(z, zz);
//     zzz = 300;
// }
// f1(1, 3);
// console.log(zzz);


// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz


// function outerB() {
//     console.log(myVar);
// }

// function outerA() {
//     var myVar = 2;
//     console.log(myVar);
//     outerB();
// }

// var myVar = 1;
// console.log(myVar);
// outerA();
// console.log(myVar);




// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// function outerA2() {
//     var myVar = 2;
//     console.log(myVar);

//     function innerB() {
//         console.log(myVar);
//     }
//     innerB();
// }
// outerA2();
// console.log(myVar);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

function square(num) {
    var total = num * num;
    return total;
}

var total = 50;
var number = square(20);
console.log(total);

