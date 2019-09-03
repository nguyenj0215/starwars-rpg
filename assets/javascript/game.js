
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
var characterList = [
    luke = {
        healthPoints: 100,
        baseAttackPower: 0,
        attackPower: 10,
        counterAttackPower: 20,
        selected: false,
        defSelected: false
    },
    obiWan = {
        healthPoints: 100,
        baseAttackPower: 0,
        attackPower: 10,
        counterAttackPower: 20,
        selected: false,
        defSelected: false
    },
    jarjar = {
        healthPoints: 100,
        baseAttackPower: 0,
        attackPower: 10,
        counterAttackPower: 20,
        selected: false,
        defSelected: false
    },
    vadar = {
        healthPoints: 100,
        baseAttackPower: 0,
        attackPower: 10,
        counterAttackPower: 20,
        selected: false,
        defSelected: false
    }]

$(document).ready(function () {

    //user character selection ------------------------------------------------
    function characterSelection() {
        $(".luke").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                luke.selected = true;
                charOne = luke;
                $(".luke").appendTo(".fightDisplayL");
                $(".obiWan, .jarjar, .vadar").css({ "border": "5px solid red" })
            }
        })
        $(".obiWan").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                obiWan.selected = true;
                charOne = obiWan;
                $(".obiWan").appendTo(".fightDisplayL");
                $(".obiWan, .jarjar, .vadar").css({ "border": "5px solid red" })
            }
        })
        $(".jarjar").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                jarjar.selected = true;
                charOne = jarjar;
                $(".jarjar").appendTo(".fightDisplayL");
                $(".obiWan, .jarjar, .vadar").css({ "border": "5px solid red" })
            }
        })
        $(".vadar").on("click", function () {
            if (charOneSelected === false) {
                charOneSelected = true;
                vadar.selected = true;
                charOne = vadar;
                $(".vadar").appendTo(".fightDisplayL");
                $(".obiWan, .jarjar, .vadar").css({ "border": "5px solid red" })
            }
        })
    }

    //enemy character selection -------------------------------------------------------------------
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
    }

    //attack function --------------------------------------
    function attackEnemy(){
        $(".attack").on("click", function() {
            if (charOneSelected === true && charTwoSelected === true) {
                charOne.baseAttackPower += charOne.attackPower;
                charOne.healthPoints -= charTwo.counterAttackPower;
                charTwo.healthPoints -= charOne.baseAttackPower;
                if (charOne.healthPoints < 0 && charTwo.healthPoints > 0) {
                    alert("You win!")
                }
                else if (charTwo.healthPoints < 0 &&  charOne.healthPoints > 0) {
                    alert("You lose!")
                } 

            }
        })
    }


    //restart function

    enemySelection();
    characterSelection();
})
