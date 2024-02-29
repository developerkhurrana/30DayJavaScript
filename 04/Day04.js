//Grades

let marks = 33;

if (marks > 100 || marks < 0) {
  console.log("Invalid Marks");
} else if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B+");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Failed!");
}

//Weather

let autumn = ["September", "October", "November"];
let winter = ["December", "January", "February"];
let spring = ["March", "April", "May"];
let summer = ["June", "July", "August"];

let month = "April";

if (
  month == autumn[0] ||
  month.includes(autumn[1]) ||
  month.includes(autumn[2])
) {
  console.log("Autumn");
} else if (
  month == winter[0] ||
  month.includes(winter[1]) ||
  month.includes(winter[2])
) {
  console.log("winter");
}
if (
  month == spring[0] ||
  month.includes(spring[1]) ||
  month.includes(spring[2])
) {
  console.log("Spring");
}
if (
  month == summer[0] ||
  month.includes(summer[1]) ||
  month.includes(summer[2])
) {
  console.log("Summer");
}

// Weekend

let day = "Sunday";

let weekends = ["Saturday", "Sunday"];
let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

if (day == weekends[0] || day == weekends[1]) {
  console.log("Weekend");
} else {
  console.log("Working Day");
}

//Monthday
monthInput = "February";
yearInput = 2025;

month = monthInput.toUpperCase();

switch (month) {
  case "JANUARY":
    console.log(month + " has 31 days");
    break;
  case "FEBRUARY":
    {
      yearInput % 4 == 0
        ? console.log(month + " has 29 days")
        : console.log(month + " has 28 days");
    }
    break;
  case "MARCH":
    console.log(month + " has 31 days");
    break;
  case "APRIL":
    console.log(month + " has 30 days");
    break;
  case "MAY":
    console.log(month + " has 31 days");
    break;
  case "JUNE":
    console.log(month + " has 30 days");
    break;
  case "JULY":
    console.log(month + " has 31 days");
    break;
  case "AUGUST":
    console.log(month + " has 31 days");
    break;
  case "SEPTEMBER":
    console.log(month + " has 30 days");
    break;
  case "OCTOBER":
    console.log(month + " has 31 days");
    break;
  case "NOVEMBER":
    console.log(month + " has 30 days");
    break;
  case "DECEMBER":
    console.log(month + " has 31 days");
    break;
}
