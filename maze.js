let bound1;

window.onload = home;

function home() {
    bound1 = document.getElementById("boundary1");
    bound1.onmouseover = redWall;
}

function redWall(){
    bound1.className = "youlose";   
}

