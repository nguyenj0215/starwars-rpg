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

// chracters objects -----------------------------------------------------------
var luke = {
    name : "Luke Skywalker",
    healthPoints: 120,
    baseAttackPower: 0,
    attackPower: 8,
    counterAttackPower: 2,
    selected: false,
    defSelected: false
}
var obiWan = {
    name : "Obi-Wan Kenobi",
    healthPoints: 100,
    baseAttackPower: 0,
    attackPower: 9,
    counterAttackPower: 5,
    selected: false,
    defSelected: false
}
var jarjar = {
    name : "Jar Jar Binks",
    healthPoints: 150,
    baseAttackPower: 0,
    attackPower: 2,
    counterAttackPower: 20,
    selected: false,
    defSelected: false
}
var vadar = {
    name : "Darth Vadar",
    healthPoints: 180,
    baseAttackPower: 1,
    attackPower: 1,
    counterAttackPower: 25,
    selected: false,
    defSelected: false
}

$(document).ready(function () {

    //user character selection ------------------------------------------------------------------
    function characterSelection() {
        $(".luke").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                luke.selected = true;
                charOne = luke;
                $(".luke").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".obiWan, .jarjar, .vadar").appendTo(".enemyDisplay").css({ "background-color": "red" })
            }
        })
        $(".obiWan").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                obiWan.selected = true;
                charOne = obiWan;
                $(".obiWan").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".luke, .jarjar, .vadar").appendTo(".enemyDisplay").css({ "background-color": "red" })
            }
        })
        $(".jarjar").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                jarjar.selected = true;
                charOne = jarjar;
                $(".jarjar").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".obiWan, .luke, .vadar").appendTo(".enemyDisplay").css({ "background-color": "red" })
            }
        })
        $(".vadar").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                vadar.selected = true;
                charOne = vadar;
                $(".vadar").appendTo(".fightDisplayL").css({ "background-color": "green" });
                $(".obiWan, .jarjar, .luke").appendTo(".enemyDisplay").css({ "background-color": "red" })
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
            }
        })
        $(".obiWan").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && obiWan.selected != true) {
                charTwoSelected = true;
                obiWan.defSelected = true;
                charTwo = obiWan;
                $(".obiWan").appendTo(".fightDisplayR")
            }
        })
        $(".jarjar").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && jarjar.selected != true) {
                charTwoSelected = true;
                jarjar.defSelected = true;
                charTwo = jarjar;
                $(".jarjar").appendTo(".fightDisplayR")
            }
        })
        $(".vadar").on("click", function () {
            if (charOneSelected === true && charTwoSelected === false && vadar.selected != true) {
                charTwoSelected = true;
                vadar.defSelected = true;
                charTwo = vadar;
                $(".vadar").appendTo(".fightDisplayR")
            }

        })
        $(".attack").on("click", function () {
            if (charOneSelected === true && charTwoSelected === true) {
                charOne.baseAttackPower = charOne.baseAttackPower + charOne.attackPower;
                charOne.healthPoints = charOne.healthPoints - charTwo.counterAttackPower;
                charTwo.healthPoints = charTwo.healthPoints - charOne.baseAttackPower;
                $(".fightTextDisplay").text("You attack " + charOne.name)
                if (charOne.healthPoints < 0) {
                    alert("You win!")
                }
                else if (charTwo.healthPoints < 0) {
                    alert("You lose!")
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

        charOneSelected = false;
        charTwoSelected = false;
        charOne = "";
        charTwo = "";

        luke = {
            healthPoints: 100,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
        obiWan = {
            healthPoints: 110,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
        jarjar = {
            healthPoints: 120,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
        vadar = {
            healthPoints: 130,
            baseAttackPower: 0,
            attackPower: 10,
            counterAttackPower: 20,
            selected: false,
            defSelected: false
        }
    })
})
