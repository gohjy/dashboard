jokes = [
	["", ""],
	["", ""],
	["", ""],
	["", ""],
	["", ""],
	["", ""]
]

diceImageURLs = [
	"https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png",
	"https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png",
	"https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png",
	"https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png",
	"https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png",
	"https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"
]

function generateRandomDice() {
	return Math.floor(Math.random() * 6)
}

function setDiceImage(element, dice) {
	imageURL = diceImageURLs[dice]
	element.src = imageURL
}

function rollDice(constReps, imgElement, buttonElement) {
	currentRoll = 0
	maxConstReps = constReps * 6
	existingRolls = 0
	while (existingRolls <= maxConstReps) {
		setTimeout(setDiceImage(imgElement, currentRoll), existingRolls * 500)
		existingRolls += 1
		currentRoll += 1
		currentRoll %= 6
	}
	randomRolls = generateRandomDice()
	while (currentRoll <= randomRolls) {
		setTimeout(setDiceImage(imgElement, currentRoll), existingRolls * 500)
		existingRolls += 1
		currentRoll += 1
		currentRoll %= 6
	}
	setTimeout(function() {
		buttonElement.style.display = "inline-block"
	}, existingRolls * 500)
}

function newRollDice(imgID, buttonID) {
	imgElement = document.getElementById(imgID)
	buttonElement = document.getElementById(buttonID)
	randomRoll = generateRandomDice()
	imgElement.src = diceImageURLs[randomRoll]
	buttonElement.innerText = "Show Joke"
}