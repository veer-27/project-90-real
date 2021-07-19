function send() {
question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_word + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}