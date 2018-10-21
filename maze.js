let bound1;
let allBounds;
let checkWin = false;
let outOfBounds = false;
let finish;
let begin;

window.onload = home;

function home() {
    bound1 = document.getElementById("boundary1");
    bound1.onmouseover = redWall;
    allBounds = document.querySelectorAll(".boundary");
    for (let i = 0; i < allBounds.length - 1; i++) {
		allBounds[i].onmouseover = overWalls;
    }
    finish = document.getElementById("end");
    finish.onmouseover = Win;
    begin = document.getElementById("start");
    begin.onclick = restart;
    mazeBox = document.getElementById("maze");
    mazeBox.onmouseleave = noCheat;
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

function Win(){
    if (!outOfBounds){
        //alert("You win!");
        document.getElementById("status").innerHTML = "You win!";
    }
}

function restart(){
	outOfBounds = false;
    for (let i = 0; i < allBounds.length; i++) {
            allBounds[i].classList.remove("youlose");  
    }
}

function noCheat(){
	if(!checkWin){
		overWalls();		
		}
} 