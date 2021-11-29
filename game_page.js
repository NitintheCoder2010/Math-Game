player_1_score=0
player_2_score=0

player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player_1_name;
document.getElementById("player2_name").innerHTML=player_2_name;

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;