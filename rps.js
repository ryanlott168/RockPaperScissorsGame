const RPS = {

  playGame(){
    const userChoice = this.getUserChoice();
    const compChoice = this.getComputerChoice();
    console.log(`
Your choice was: ${userChoice}
The computer's choice was: ${compChoice}`);
    const winner = this.determineWinner(userChoice, compChoice);
    console.log(winner);
  },

  getUserChoice(){
  	let userInput = prompt('Would you like rock, paper or scissors? ');
    userInput =userInput.toLowerCase();
    if((userInput == 'rock') || (userInput == 'paper') || (userInput == 'scissors') || (userInput == 'bomb')){
    	return  userInput;
    }else{
      console.log("The input entered was not one of the options.");
    }
  },

  getComputerChoice(){
  	const randNum = Math.floor(Math.random() * 3);
		let compChoice = "";
    if(randNum == 0){
      compChoice = 'rock';
    }else if(randNum == 0){
      compChoice = 'paper';
    }else{
      compChoice = 'scissors';
    }
    return compChoice;
	},

  determineWinner(userChoice, compChoice){
    if(userChoice == compChoice){
       return `Looks like there was a tie! You both chose ${userChoice}.`;
    }else if(userChoice == 'bomb'){
        return 'User used the secret weapon \'THE BOMB\'.\nYou Win!!';
    }else if(userChoice == 'rock'){
      if(compChoice == 'paper'){
        return 'Looks like the computer won! Good Game!';
      }else{
        return 'Looks like you won this round!';
      }
    }else if(userChoice == 'paper'){
      if(compChoice == 'scissors'){
        return 'Looks like the computer won! Good Game!';
      }else{
        return 'Looks like you won this round!';
      }
    }else{
      if(compChoice == 'rock'){
        return 'Looks like the computer won! Good Game!';
      }else{
        return 'Looks like you won this round!';
      }
    }
  }
};

RPS.playGame();
