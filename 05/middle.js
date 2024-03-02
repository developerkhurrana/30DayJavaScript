const companies = [
  "Facebook",
  "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon",
    "Cisco Systems",
    "Bodhi",
];

let middle = (companies.length) / 2;
let floorMiddle = Math.floor(middle);

{
  middle % 2 == 0
    ? console.log(companies[floorMiddle - 1] + " " + companies[floorMiddle])
    : console.log(companies[floorMiddle]);
}

