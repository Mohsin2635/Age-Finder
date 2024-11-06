const input_number = document.getElementById(
  "input_number"
) as HTMLInputElement;
const radio_button1 = document.getElementById("Yes") as HTMLInputElement;
const radio_button2 = document.getElementById("No") as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;
let Radio1: number;
let Radio2: number;
let Result: number = 350;

button.addEventListener("click", generate);
function generate() {
  let val = input_number.value;
  let res = Number(val);
  const value = radio_button2.value;
  const salectedValue = radio_button1.value;
  if (salectedValue === "Yes" && radio_button1.checked) {
    Radio1 = 1774;
  } else if (value === "No" && radio_button2.checked) {
    Radio2 = 1773;
  }
  if (Radio1 === 1774) {
    Result += 1774;
  } else if (Radio2 === 1773) {
    Result += 1773;
  }
  const adding = Result - res;
  const finalResult = adding - 100;

  alert(`Congratulation you'r ${finalResult} Years Old..... `);
  location.reload();
}
