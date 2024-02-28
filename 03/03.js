let firstName = "Kshitij";
let lastName = "Khurrana";
let country = "India";
let city = "Mumbai";
let age = 24;
let isMarried = false;
let year = new Date();

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // object

console.log("10" == 10);

let number = "9.8";

console.log(parseInt(number));

console.log(true);
console.log("hello");
console.log("34");

console.log(false);
console.log(0);
console.log("");

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

let p = "python";
let j = "jargon";

console.log(p.length !== j.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

console.log(!(p.includes("on"), j.includes("on")));

let now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDay());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

// Weeklywage

let h = 40;
let r = 24;

console.log("Your weekly pay is:" + h * r);

// Name length

let yourName = "Epshita";
let yourLName = "Helaly";

{
  yourName.length >= 7
    ? console.log(`${yourName} is long`)
    : console.log(`${yourName} is short`);
}

// Name compare

{
  yourName.length > yourLName.length
    ? console.log(
        `Your first name, ${yourName} is longer than your family name, ${yourLName}`
      )
    : console.log(
        `Your first name, ${yourName} is shorter than your family name, ${yourLName}`
      );
}

// Age compare

let myAge = 24;
let yourAge = 16;

console.log(`I am ${myAge - yourAge} years older than you.`);

// Legal Drive

let birthYear = 2007;
let legalAge = now.getFullYear() - birthYear;
if (legalAge < 0) {
    console.log("Please enter Birth Year again");
  } else {
    legalAge >= 18
      ? console.log(`You are ${legalAge}. You are old enough to drive`)
      : console.log(
          `You are ${legalAge}. You will be allowed to drive after ${
            18 - legalAge
          }`
        );
  }


  // years to seconds

var secsPerMin = 60
var  minsPerHour= 60
var  hoursPerDay = 24
var  daysPerWeek = 7 
var weeksPerYear = 52

var covAge = 24

var secsPerDay = secsPerMin * minsPerHour *  hoursPerDay
var secsPerWeek = secsPerDay *  daysPerWeek
var secsPerYear = secsPerWeek * weeksPerYear


var secAge = covAge *  secsPerYear

console.log(`You have lived ${secAge} seconds`)

// Static clock 
let date = new Date()

    let YY = date.getFullYear();
    let MM = String(date.getMonth() + 1).padStart(2,'0')
    let DD = String(date.getDate()).padStart(2,'0')
    let HH = String(date.getHours()).padStart(2,'0')
    let mm = String(date.getMinutes()).padStart(2,'0')
 
    console.log(`${YY}-${MM}-${DD}  ${HH}:${mm}`) 



