// eventually for portfolio: scale images upon selection, sound upon clicking attack, background music, clearer background image

//global variable declarations -------------------------------------------------
var healthPoints;
var baseAttackPower;
var attackPower;
var counterAttackPower;
var selected;
var defSelected;
var charOneSelected = false;
var charTwoSelected = false;
var charOne;
var charTwo;
var attack = true;

// chracters objects -----------------------------------------------------------
var luke = {
    name: "Luke Skywalker",
    healthPoints: 120,
    baseAttackPower: 0,
    attackPower: 8,
    counterAttackPower: 2,
    selected: false,
    defSelected: false
}
var obiWan = {
    name: "Obi-Wan Kenobi",
    healthPoints: 100,
    baseAttackPower: 0,
    attackPower: 9,
    counterAttackPower: 5,
    selected: false,
    defSelected: false
}
var jarjar = {
    name: "Jar Jar Binks",
    healthPoints: 150,
    baseAttackPower: 0,
    attackPower: 2,
    counterAttackPower: 20,
    selected: false,
    defSelected: false
}
var vadar = {
    name: "Darth Vadar",
    healthPoints: 180,
    baseAttackPower: 1,
    attackPower: 1,
    counterAttackPower: 25,
    selected: false,
    defSelected: false
}

$(document).ready(function () {

    $(".enemyLabel").hide()
    $(".fightBoxLabel").hide()
    $(".attack").hide()

    //user character selection ------------------------------------------------------------------
    function characterSelection() {
        $(".luke").on("click", function () {
            if (charOneSelected === false) {
                $(".characterTitle").hide()
                charOneSelected = true;
                luke.selected = true;
                charOne = luke;
                $(".luke").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".obiWan, .jarjar, .vadar").appendTo(".enemyDisplay").css({ "background-color": "red" })
                $(".enemyLabel").show()
            }
        })
        $(".obiWan").on("click", function () {
            if (charOneSelected === false) {
                $(".characterTitle").hide()
                charOneSelected = true;
                obiWan.selected = true;
                charOne = obiWan;
                $(".obiWan").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".luke, .jarjar, .vadar").appendTo(".enemyDisplay").css({ "background-color": "red" })
                $(".enemyLabel").show()
            }
        })
        $(".jarjar").on("click", function () {
            if (charOneSelected === false) {
                $(".characterTitle").hide()
                charOneSelected = true;
                jarjar.selected = true;
                charOne = jarjar;
                $(".jarjar").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".obiWan, .luke, .vadar").appendTo(".enemyDisplay").css({ "background-color": "red" })
                $(".enemyLabel").show()
            }
        })
        $(".vadar").on("click", function () {
            if (charOneSelected === false) {
                $(".characterTitle").hide()
                charOneSelected = true;
                vadar.selected = true;
                charOne = vadar;
                $(".vadar").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".obiWan, .jarjar, .luke").appendTo(".enemyDisplay").css({ "background-color": "red" })
                $(".enemyLabel").show()
            }
        })
    }

    //enemy character selection and fight initiation---------------------------------------------------
    function enemySelection() {
        $(".luke").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && luke.selected != true) {
                charTwoSelected = true;
                luke.defSelected = true;
                charTwo = luke;
                $(".luke").appendTo(".fightDisplayR")
                $(".fightBoxLabel").show()
                $(".attack").show()
            }
        })
        $(".obiWan").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && obiWan.selected != true) {
                charTwoSelected = true;
                obiWan.defSelected = true;
                charTwo = obiWan;
                $(".obiWan").appendTo(".fightDisplayR")
                $(".fightBoxLabel").show()
                $(".attack").show()
            }
        })
        $(".jarjar").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && jarjar.selected != true) {
                charTwoSelected = true;
                jarjar.defSelected = true;
                charTwo = jarjar;
                $(".jarjar").appendTo(".fightDisplayR")
                $(".fightBoxLabel").show()
                $(".attack").show()
            }
        })
        $(".vadar").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && vadar.selected != true) {
                charTwoSelected = true;
                vadar.defSelected = true;
                charTwo = vadar;
                $(".vadar").appendTo(".fightDisplayR")
                $(".fightBoxLabel").show()
                $(".attack").show()
            }

        })
        $(".attack").on("click", function () {
           
            if (charOneSelected === true && charTwoSelected === true && attack === true) {
                charOne.baseAttackPower = charOne.baseAttackPower + charOne.attackPower;
                charOne.healthPoints = charOne.healthPoints - charTwo.counterAttackPower;
                charTwo.healthPoints = charTwo.healthPoints - charOne.baseAttackPower;
                $(".fightTextDisplay").text(charOne.name + " attacks " + charTwo.name + " for " + charOne.baseAttackPower + " , " + charTwo.name + " has " + charTwo.healthPoints + " HP remaining. "
                    + charTwo.name + " counter attacks " + charOne.name + " for " + charTwo.counterAttackPower + " , " + charOne.name + " has " + charOne.healthPoints + " HP remaining.")
                $(".fightTextDisplay").show()
                if (charOne.healthPoints < 0) {
                    attack = false
                    $(".fightTextDisplay").text(charOne.name + " has defeated " + charTwo.name + ". " + "You win!")
                }
                else if (charTwo.healthPoints < 0) {
                    attack = false
                    $(".fightTextDisplay").text(charTwo.name + " has defeated " + charOne.name + ". " + "You lose!")
                }
            
            }
        })
    }

    //calling functions -----------------------------------------------------------------------------
    characterSelection();
    enemySelection();

    //restart function on click --------------------------------------------------------------------

    $(".restart").on("click", function () {

        $(".luke, .obiWan, .jarjar, .vadar").appendTo(".characterBox").css({ "background-color": "green" })

        $(".fightTextDisplay").hide()
        $(".characterTitle").show()
        $(".fightBoxLabel").hide()
        $(".enemyLabel").hide()
        $(".attack").hide()

        charOneSelected = false;
        charTwoSelected = false;
        attack = true;
        charOne = {};
        charTwo = {};

        luke = {
            name : "Luke Skywalker",
            healthPoints: 100,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
        obiWan = {
            name : "Obi-Wan Kenobi",
            healthPoints: 110,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
        jarjar = {
            name : "Jar Jar Binks",
            healthPoints: 120,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
        vadar = {
            name : "Darth Vadar",
            healthPoints: 130,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
    })
})
