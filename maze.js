let bound1;
let allBounds;
let checkWin = false;
let outOfBounds = false;

window.onload = home;

function home() {
    bound1 = document.getElementById("boundary1");
    bound1.onmouseover = redWall;
    allBounds = document.querySelectorAll(".boundary");
    for (let i = 0; i < allBounds.length - 1; i++) {
		allBounds[i].onmouseover = overWalls;
    }
}

function redWall(){
    bound1.className = "youlose";   
}

function overWalls(){ 
    if (!checkWin){ 
        if(!outOfBounds) 
        {
			outOfBounds = true;
			for (let i = 0; i < allBounds.length - 1; i++) {
			allBounds[i].className += " youlose";
			}
		}
	}
}
