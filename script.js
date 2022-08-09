let share = document.getElementById("share");
let socialMedia = document.querySelector(".social-media");
let shareBackGround = document.querySelector(".share");

share.addEventListener("click", () => {
    socialMedia.classList.toggle("hidden");
    shareBgColor();
})

document.getElementById(".share").addEventListener("mouseenter", hoverShare);
document.getElementById(".share").addEventListener("mouseout", hoverOutShare);

function shareBgColor() {
    if(socialMedia.classList.contains("hidden")){
        document.getElementById("share").style.background = "rgb(238, 235, 235)";
    }
    else{
        document.getElementById("share").style.background = "black";
    }
}
function hoverShare(){
    document.getElementById("share").style.background = "black";
}
function hoverOutShare(){
    document.getElementById("share").style.background = "rgb(238, 235, 235)";
}