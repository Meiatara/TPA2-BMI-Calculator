const button = document.getElementById("btn");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const result = document.getElementById("result");

  let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

  if (bmi < 18.5) {
    result.innerHTML = `Your BMI is <b> ${bmi} </b>which means You are <b>Overweight</b>`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = `Your BMI is <b> ${bmi} </b>which means You are <b>Normal</b>`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = `Your BMI is <b> ${bmi} </b>which means You are <b>Overweight</b>`;
  } else {
    result.innerHTML = `Your BMI is <b> ${bmi} </b>which means You are <b>Obesity</b>`;
  }

  if (weight <= 0 || height <= 0) {
    alert("please insert your height and weight");
    result.innerHTML = "";
  }
});
