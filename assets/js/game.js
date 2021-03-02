var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this...
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
   //alter players that they are starting the round
    window.alert("welcome to Robot Gladiators!");

var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);


// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {

    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // confirm player wants to skip

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
    
    }
  }
}

var startGame = function() {
  for (var i = 0; i < enemyName.length; i++) {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  }
  //after the loop ends, player is either out of health or enemies to fight, so run the end game function
  endGame();
};
  var endGame = function() {
     // if player is still alive, player wins!
  if (playerHealth > 0) {
      window.alert("great job, you surivived the game! you now have a score of " + playerMoney + ".");
    } 
  else {
    window.alert("you've lost your robot in battle.");
  }
  
    window.alert("The game has now ended. Let's see how you did!");{
  }

    //ask player if they'd like to play again
  var playAgainConfirm = window.conirm("would you like to play again?");

  if (playAgainConfirm) {
    //restart game
    startGame()
  }
  else {
    window.alert("Thank you for playing robot gladiator! Come back soon!");
  }
  }

  for (var i = 0; i < enemyName.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators ROUND " + (i + 1));

      var pickedEnemyName = enemyName[i];

      enemyHealth = 50;

      fight(pickedEnemyName);
    }
    else {
      window.alert("You have lost your roboth in battle! GAME OVER!");
      break;
    }
  };



//start the game when the page loads
startGame();
fight();
