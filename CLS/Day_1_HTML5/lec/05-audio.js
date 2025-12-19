var audioTag= document.getElementsByTagName("audio")[0];
console.log(audioTag);

var timeRange = document.getElementsByTagName("input")[0];
console.log(timeRange);



// currentTime --> audio tag
// currentTime --> audioTag.duration
// timeRange.value --> time range


function play(){
    audioTag.play()
}


function pause(){
    audioTag.pause()
}