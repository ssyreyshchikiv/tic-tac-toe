var player = "X";
var field = inicializationField();
var courseOfTheGame = document.getElementById("courseOfTheGame");
var numberOfWinsX = document.getElementById("numberOfWinsX");
var numberOfWinsO = document.getElementById("numberOfWinsO");
var reset = document.getElementById("reset");
var restart = document.getElementById("restart");
var stepCount = 0;

var winsX = 0;
var winsO = 0;


function inicializationField() {
	var elementsField = document.querySelectorAll("#gameContainer .col");
	var elementFieldArray = [].slice.call(elementsField);
	return elementFieldArray;
}

function clickOnTheGameField(field) {
	testOfTheWinner(field);
	for (var i = 0; i < field.length; i++) {
		field[i].addEventListener("click", divClick);
	}	
}

function divClick() {
	if (this.innerHTML == "") {
		this.innerHTML = player;
			if (player == "X") {
			player = "O";
			} else {
				player = "X";
			}
			
			stepCount++;

			if(stepCount === 9) {
				courseOfTheGame.innerHTML = "ничья"
			} else {
				courseOfTheGame.innerHTML = "ходит игрок " + player;
			}
			testOfTheWinner(field);
		}
	}
	

function gameEnd(field) {
	
	for (var i = 0; i < field.length; i++) {
		field[i].removeEventListener("click", divClick);
	}
	if(player ==="O") {
		winsX++;
		numberOfWinsX.innerHTML = winsX;
		courseOfTheGame.innerHTML = "Победил игрок X";
		
				
	} else {
		winsO++
		numberOfWinsO.innerHTML = winsO;
		courseOfTheGame.innerHTML = "Победил игрок O";
		
				
		}
}

function testOfTheWinner(field) {
	var victoriousCombination = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (var i = 0; i < victoriousCombination.length; i++) {
		var vc = victoriousCombination[i];

		if (field[vc[0]].innerHTML == field[vc[1]].innerHTML && field[vc[1]].innerHTML == field[vc[2]].innerHTML && field[vc[0]].innerHTML != "") {
			gameEnd(field);
			
		}
	
	}
}

reset.addEventListener("click", function(){

	for (var i = 0; i < field.length; i++) {
		field[i].addEventListener("click", divClick);
		field[i].innerHTML = "";
		player = "X";
		courseOfTheGame.innerHTML = "ходит игрок " + player;
		stepCount = 0;
	}	
})

restart.addEventListener("click", function() {
	location.reload();
})

clickOnTheGameField(field);


