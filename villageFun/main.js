//setting up wood varables
var woodAmount = 100
var woodUpgrades = 1
var woodperClick = 1
var lumberHouseAmount = 0
var lumberHouseCost = 100 * lumberHouseAmount
var woodPerSecond = lumberHouseAmount * woodUpgrades

//setting up food varables
var foodUpgrades = 0
var foodAmount = 100
var foodperClick = 1
var farmHouseAmount = 0
var farmHouseCost = 100*farmHouseAmount
var foodPerSecond = farmHouseAmount * foodUpgrades

//setting up stone variables
var stoneUpgrades = 0
var stoneAmount = 100
var stoneperClick = 1
var quaryAmount = 0
var quaryCost = 100*quaryAmount
var stonePerSecond = quaryAmount * stoneUpgrades

function buttonPress(type) {
	if (type == "wood") {
		woodAmount += woodperClick;
	}
	if (type == "food") {
		foodAmount += foodperClick;
	}
	if (type == "stone") {
		stoneAmount += stoneperClick;
	}

}

function buildingRun() {
	stoneAmount += stonePerSecond;
	foodAmount += foodPerSecond;
	woodAmount += woodPerSecond;
	document.getElementById('stoneText').innerHTML = `stone: ${stoneAmount}`
	document.getElementById('woodText').innerHTML = `wood: ${woodAmount}`
	document.getElementById('foodText').innerHTML = `food: ${foodAmount}`
}

window.setInterval(function() {
	buildingRun()
	}, 1000); 