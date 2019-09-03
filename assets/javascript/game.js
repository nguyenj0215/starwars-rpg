$(document).ready (function() {

var healthPoints;
var baseAttackPower;
var attackPower;
var counterAttackPower;
var moveImage;

var luke = {
    name: "Luke Skywalker",
    healthPoints: 100,
    attackPower: 10,
    counterAttackPower: 20,
    image: '<img src="assets/images/luke.jpeg" class="characterImages">'
}
var obiWan = {
    name: "Obi-Wan Kenobi",
    healthPoints: 100,
    attackPower: 10,
    counterAttackPower: 20,
    image: '<img src="assets/images/obi-wan.jpeg" class="characterImages">'
}
var jarjar = {
    name: "Jar Jar Binks",
    healthPoints: 100,
    attackPower: 10,
    counterAttackPower: 20,
    image: '<img src="assets/images/jarjar.jpeg" class="characterImages">'
}
var vadar = {
    name: "Darth Vadar",
    healthPoints: 100,
    attackPower: 10,
    counterAttackPower: 20,
    image: '<img src="assets/images/vadar.jpeg" class="characterImages">'
}

//gamestart and reset function
function gameStart() {

//reset each character images position
    $(luke.image).appendTo("#allCharacters")
    $(obiWan.image).appendTo("#allCharacters")
    $(jarjar.image).appendTo("#allCharacters")
    $(vadar.image).appendTo("#allCharacters")

//reset each characters stats
    luke.healthPoints = 100
    luke.attackPower = 10
    luke.counterAttackPower = 20

    obiWan.healthPoints = 100
    obiWan.attackPower = 10
    obiWan.counterAttackPower = 20

    jarjar.healthPoints = 100
    jarjar.attackPower = 10
    jarjar.counterAttackPower = 20

    vadar.healthPoints = 100
    vadar.attackPower = 10
    vadar.counterAttackPower = 20
}

//calling gamestart function
gameStart();

//selection of user character which will empty initial display and 
//move new selection into your character and other options to enemy section
$(jarjar.image).on("click", function () {
    $("#allCharacters").empty()
    $(jarjar.image).appendTo("#yourCharacter")
})

})
