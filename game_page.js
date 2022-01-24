player_1_score=0
player_2_score=0

player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML=player_1_name;
document.getElementById("player2_name").innerHTML=player_2_name;

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

function send() {
    num1 = document.getElementById("number_1").value;
    num2 = document.getElementById("number_2").value;
    answer = parseInt(num1) * parseInt(num2);

    question_text = "<h4> " + num1 +" X "+ num2 +" </h4> <br>";
    answer_text = "Answer : <input id ='user_answer' type = 'text'> <br>";
    submit_text = "<button onclick = 'correct()'>Submit</button>";

    output_text = question_text + answer_text +  submit_text;

    document.getElementById("output").innerHTML = output_text;

    document.getElementById("number_1").value = " ";
    document.getElementById("number_2").value = " ";

}