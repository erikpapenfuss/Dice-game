/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


//document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function() 
{
	var dice = Math.ceil(Math.random() * 6);

	document.querySelector('.dice').src = 'dice-' + dice + '.png';
	var currScore = 0;

	 if(dice === 1) {
		currScore = 0;		
	} else 
	{
		currScore += dice;	
	};
	document.querySelector('#current-' + activePlayer).textContent = currScore;


});

document.querySelector('.btn-hold').addEventListener('click', function() 
{
	scores[activePlayer] += dice;
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
});