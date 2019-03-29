// variables
/*var clickedDiamond=0;

var test;

document.getElementById ("diamondBtn").addEventListener("click",diamondClickCounter);

function diamondClickCounter(){
    //document.getElementById("diamondBtn").innerHTML = 0
    clickedDiamond++;
    console.log(clickedDiamond);
};*/
var isGameActive = false;
var randomizedChosenGoalNumber;
var crystalValues;
var winCounter;
var loseCounter;
var currentTotalCounter;
var diamondButton;
var rubyButton;
var emeraldButton;
var saphireButton;
var checkValueToGoal;


//start button
$("#startGameButton").click(function(){
//when start game button is clicked do function
    if(isGameActive==false){
        console.log(isGameActive);
//if game is not active then
        isGameActive=true;
        console.log("current state of game: "+ isGameActive);
//switch from not active to active
        restartGame();
//and launch restart game function to start game
    }
});

//reset function
function restartGame(){
randomizedChosenGoalNumber= Math.floor((Math.random()*102)+19);
//give random value between over 19 to goal number for game
console.log(randomizedChosenGoalNumber);
$("#goalNumber").html(randomizedChosenGoalNumber);
//show player the goal number by replacing the content of the html
//reset value hidden individual crystal values 
crystalValues=[];
//describe crystal values as an array
for(let i=0; i<4; i++){
//set up loop to iterate 4 times, assigning a value between 1 and 12 to each of the crystal values 
    crystalValues.push (Math.floor(Math.random()*12)+1);
//push random chosen value to the apropriate spot in the array
}
console.log(crystalValues);
//show me what the values are for all the crystals
//reset counters
winCounter=0;
//start win counter value off at 0
$("#winCounter").html(winCounter);
//set html of wincounter id to whatever wincounter currently is
loseCounter=0;
//set lose counter to value of 0
$("#loseCounter").html(loseCounter);
//set html of lose counter to whatever losecounter currently is
currentTotalCounter=0;
//set current total of all crystals to 0
$("#currentTotalCounter").html(currentTotalCounter);
// sets html of current total counter to whatever the value is
}

//player clicks crystal 1
$("#diamondButton").click(function(){
    currentTotalCounter = currentTotalCounter + crystalValues[0];
    console.log(`this is the new value of counter:  ${currentTotalCounter}`);
    $("#currentTotalCounter").html(currentTotalCounter);
    checkValueToGoal();
    
});
//Player clicks crystal 2
$("#rubyButton").click(function(){
    currentTotalCounter = currentTotalCounter + crystalValues[1];
    console.log(`this is the new value of counter:  ${currentTotalCounter}`);
    $("#currentTotalCounter").html(currentTotalCounter);
});
//Player clicks Crystal 3
$("#emeraldButton").click(function(){
    currentTotalCounter = currentTotalCounter + crystalValues[2];
    console.log(`this is the new value of counter:  ${currentTotalCounter}`);
    $("#currentTotalCounter").html(currentTotalCounter);
});
//Player clicks Crystal 4
$("#saphireButton").click(function(){
    currentTotalCounter = currentTotalCounter + crystalValues[3];
    console.log(`this is the new value of counter:  ${currentTotalCounter}`);
    $("#currentTotalCounter").html(currentTotalCounter);
});
//Check to see if won or lost and then reset
function checkValueToGoal(){
    if(currentTotalCounter===randomizedChosenGoalNumber){
        winCounter++;
        $("#winCounter").html(winCounter);  
        restartGame();
    } else if(currentTotalCounter> randomizedChosenGoalNumber){
        loseCounter++;
        $("#loseCounter").html(loseCounter);
        restartGame();
    }
};

