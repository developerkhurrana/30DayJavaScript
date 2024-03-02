let arr = Array(5);

console.log(arr.fill(8));
console.log(arr.length);
console.log(arr[0]);
console.log(arr[Math.round(arr.length / 2)]);
console.log(arr[arr.length - 1]);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  //   "India"
];

console.log(countries.length);
console.log(countries[0]);

{
  countries.length % 2 !== 0
    ? console.log(countries[Math.floor(countries.length / 2)])
    : console.log(countries[countries.length / 2]);
}

console.log(countries[countries.length - 1]);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs);

const comp = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let search = "Amazon";
// for (var i = 0; i < comp.length; i++) {
//   if (comp[i] == search ) {
//     console.log(`${comp[i]} is a company`);
//   } else {
//     console.log(`${comp[i]} is not a company`);
//   }
// }

if (comp.includes(search)) {
  console.log("exist");
} else {
  console.log("doesnt exist");
}

// console.log(

//   comp.splice(0, comp.length - 1).toString(" "),
//   "and",
//   comp[comp.length - 1],
//   "are big IT Companies"
// );
