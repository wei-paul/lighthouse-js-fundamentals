const temperature = 25;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home! You don't need it!");
}


if (age < 13){
  console.log ("Elementary School");
} else if (age >= 13 && age <=18){
  console.log ("Secondary School");
} else {
  console.log ("Lighthouse Labs");
}



 
var x = 1;

while (x <=20) {
    if (x % 3 === 0 && x % 5 === 0){
    console.log ("JuliaJames");
    } else if (x % 3){
    console.log ("Julia");
    } else if (x % 5){
    console.log("James");
    } else {
    console.log (x);
    }
    x = x + 1;

}
