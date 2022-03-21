function calculate() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("height").value;

  // Error Message  (Alert)

  if (height == "" || weight == "") {
    alert("قم بتاكد من تعبئه جميع بياناتك المطلوبة!");
    return;
  }

  let BMI = weight / (height * height);
  let status = "";

  if (BMI < 18.5) {
    status = "تعاني من نقص في الوزن";
  } else if (BMI < 25) {
    status = "وزنك صحي";
  } else if (BMI < 30) {
    status = "تعاني من زياده في الوزن";
  } else {
    status = "تعاني  من السمنه المفرطه";
  }

  BMI = BMI.toFixed(2); //Optional
  document.getElementById("result").innerHTML = BMI;
  document.getElementsByClassName("comment")[0].innerHTML = status;
}
