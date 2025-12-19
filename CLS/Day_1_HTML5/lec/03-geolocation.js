window.navigator.geolocation.getCurrentPosition(success, error);

function success(posObj) {
    console.log("latitude", posObj.coords.latitude)
    console.log("longitude", posObj.coords.longitude)
}

function error(errorObj){

    if(errorObj.code == 1){
        alert("please enable location service")
    }

    console.log(errorObj);
}

