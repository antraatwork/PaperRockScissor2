import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.css']
})
export class NewgameComponent implements OnInit {

  constructor(public router:Router) { }

  public doPlayerShowRock:boolean = true;
  public doPlayerShowPaper:boolean = false;
  public doPlayerShowScissor:boolean = false;
  public doCompShowRock:boolean = true;
  public doCompShowPaper:boolean = false;
  public doCompShowScissor:boolean = false;
  public arr:string[] =["rock","paper","scissor"];
  public playerScore:number = 0;
  public computerScore:number = 0;
  public winner:string;
  public showWinner:boolean = false;
  

  ngOnInit(){
        console.log(this.showWinner);
  }

  public newGame(){
    this.showWinner = false;
    this.playerScore = 0;
    this.computerScore = 0;
  }

  public displayRock(){
     this.doPlayerShowRock = true;
     this.doPlayerShowPaper = false;
     this.doPlayerShowScissor = false;

     this.getComputerChoice();
     this.updateScore();

  }

  public displayPaper(){
    this.doPlayerShowPaper = true;
    this.doPlayerShowScissor = false;
    this.doPlayerShowRock = false;
    
    this.getComputerChoice();
    this.updateScore();
    }

  public displayScissor(){
    this.doPlayerShowPaper = false;
    this.doPlayerShowScissor = true;
    this.doPlayerShowRock = false;

    this.getComputerChoice();
    this.updateScore();
  }

  public getComputerChoice(){
    
    if(this.arr[Math.floor(Math.random()*this.arr.length)] == "rock"){
      this.doCompShowRock = true;
      this.doCompShowPaper = false;
      this.doCompShowScissor = false;
    }
    else if(this.arr[Math.floor(Math.random()*this.arr.length)] == "paper"){
      this.doCompShowRock = false;
      this.doCompShowPaper = true;
      this.doCompShowScissor = false;
    }
    else if(this.arr[Math.floor(Math.random()*this.arr.length)] == "scissor"){
      this.doCompShowRock = false;
      this.doCompShowPaper = false;
      this.doCompShowScissor = true;
    }
  }

  public updateScore(){
     
    if(this.doPlayerShowPaper == true && this.doCompShowScissor == true){
      this.computerScore++;
    }
    else if(this.doPlayerShowScissor == true && this.doCompShowPaper == true){
      this.playerScore++;
    }
    else if(this.doPlayerShowPaper == true && this.doCompShowRock == true){
      this.playerScore++;
    }
    else if(this.doPlayerShowRock == true && this.doCompShowPaper == true){
      this.computerScore++;
    }
    else if(this.doPlayerShowScissor == true && this.doCompShowRock == true){
      this.computerScore++;
    }
    else if(this.doPlayerShowRock == true && this.doCompShowScissor == true){
      this.playerScore++;
    }
    

  }

  public winnerName(){

    if(this.playerScore > this.computerScore){
       this.winner = `Hurrah!!  
                      You have won the game`;
    }
    else if(this.computerScore > this.playerScore){
      this.winner = `Oops!!
                     You have lost the game`;
    }
    else if (this.computerScore == this.playerScore){
      this.winner = `Try again...
                     It is a tie`;
    }
    return this.winner;
  }

  public finishGame(){

    this.winnerName();
    this.showWinner = true;

    console.log(this.showWinner);
    this.playerScore = 0;
    this.computerScore = 0;
  }
  public gotoMainPage(){

    this.router.navigate(['/mainpage']);
  }

}


  


