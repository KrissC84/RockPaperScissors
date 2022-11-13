console.log("Hello World");

const figures = { 0 : "paper", 1: "scissors", 2: "rock"};
const figuresByNames= { "paper": 0,  "scissors" : 1,  "rock": 2};
const results = {"[0,1]":0,"[0,2]":1,"[1,0]":1,"[1,2]":0,"[2,0]":0,"[2,1]":1,"[0,0]":2,"[1,1]":2,"[2,2]":2} ;
const scoreNames = {1:"Win", 0:"Lose",2:"Tie"}
let userResult = 0;
let computerResult = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    //console.log(choice);
    switch (choice) {
        case 0:
            return 0;
            break;
        case 1:
            return 1;
            break;
        case 2: 
            return 2 ;  
    }
}

function getUserChoice() {
    let choice = prompt("What is your choice: Paper/ Scissors/ Rock");
    return choice.toLowerCase()
}

function playRound() {
    // your code here!
    let playerSelection =  getUserChoice();
    let computerSelection = getComputerChoice();
    
    playerSelection = figuresByNames[playerSelection];
    let result = `[${playerSelection},${computerSelection}]`

    let getResult = results[result]
    //console.log(getResult);

    if (getResult == 1) {
        userResult +=1;
    } else if (getResult == 0) {
        computerResult +=1
    }

    //console.log(computerResult);
    //console.log(userResult);
    

    if (getResult == 1) {
        return `You ${scoreNames[getResult]}! ${figures[playerSelection]} beats ${figures[computerSelection]}`
    } else if (getResult == 0) {
        return `You ${scoreNames[getResult]}!  ${figures[computerSelection]} beats ${figures[playerSelection]} `
    } else { return `It' s a tie! ${figures[computerSelection]} ties with ${figures[playerSelection]} `} 
}

function game() {
    userResult=0;
    computerResult=0;

    for (let i = 0; i < 5; i++) {
        // your code here!
        console.log(playRound())
     }

     return `The score is : You : ${userResult} - PC : ${computerResult}`
}