var readinput=require("readline-sync");
// var colors=require("chalk");
var chalk = require("chalk");

var score=0;
var userName=readinput.question(chalk.blue("enter you name: "))
console.log("Welcome !!!!", userName, "Do you know about me!!! ")

function playGame(question, answer){
    var userAns=readinput.question(chalk.green(question));
    if(userAns===answer) {
      console.log(chalk.green("Right !!!!"))
      score++
      console.log("My  scored is now", score)
    }
    else{
      console.log(chalk.red(" Oppps........Wrong !"))
    }
  console.log("Correct")
  
} 
var questions=[{Que: "Where do i live? ", Ans: "Nainital"}, 
 {Que:"What is my favroite sports?? ", Ans: "Sudoku"},
 {Que: "Who is my real Hero? ", Ans: "My father"},
 {Que: "What's your favourite song ? ", Ans: "Love you Jindgi"}]

for(i of questions){
    playGame(i.Que, i.Ans)
}
if(score>0){
  console.log(chalk.green("Congratulations !!! your Total score is", score));
}
else{
  console.log(chalk.red("Game over Your total score is", score));
}
other_Scores=[{Name:"Ritu", playerScore: "3"}, {Name: "Neeraj", playerScore:"2"}]

for(a of other_Scores){
  console.log(a.Name, "score is",a.playerScore);
} 
console.log("if you've beaten high score...send me Screenshot")