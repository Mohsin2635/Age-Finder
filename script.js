var input_number = document.getElementById("input_number");
var radio_button1 = document.getElementById("Yes");
var radio_button2 = document.getElementById("No");
var button = document.getElementById("btn");
var Radio1;
var Radio2;
var Result = 350;
button.addEventListener("click", generate);
function generate() {
    var val = input_number.value;
    var res = Number(val);
    var value = radio_button2.value;
    var salectedValue = radio_button1.value;
    if (salectedValue === "Yes" && radio_button1.checked) {
        Radio1 = 1774;
    }
    else if (value === "No" && radio_button2.checked) {
        Radio2 = 1773;
    }
    if (Radio1 === 1774) {
        Result += 1774;
    }
    else if (Radio2 === 1773) {
        Result += 1773;
    }
    var adding = Result - res;
    var finalResult = adding - 100;
    alert("Congratulation you'r ".concat(finalResult, " Years Old..... "));
    location.reload();
}
