var myInput = document.querySelector("input");
console.log(myInput);

mySpan = document.getElementById("validateError");
console.log(mySpan);


function validationSubmit(e) {
    // e.preventDefault()
    if (myInput.value == "") {
        e.preventDefault()
        mySpan.textContent = "this field is required"
    }
    else if (!isFinite(myInput.value)) {
        e.preventDefault()
        mySpan.textContent = "this field must be numbers"
    }
}

function inputValidation() {
    if (myInput.value == "") {
        mySpan.textContent = "this field is required"
    }
    else if (!isFinite(myInput.value)) {
        mySpan.textContent = "this field must be numbers"
    }
    else {
        mySpan.textContent = ""
    }
}
function char() {
    console.log(myInput.value)
}

function test1() {
    console.log(this);
    console.log(e);
    console.log(e.type);
}



function test2(e) {
    console.log(e);
    console.log(e.target);
    console.log(this);
}