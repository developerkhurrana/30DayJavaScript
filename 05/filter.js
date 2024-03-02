const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(companies.slice(3));
console.log(companies.slice(companies.length - 3));
console.log(companies.sort()); // Sorts the array in alphabetical
console.log(companies.sort().reverse());

let filteredComp = [];

for (let i = 0; i < companies.length; i++) {
  if (companies[i].match(/o/g) && companies[i].match(/o/g).length > 1) {
    continue;
  }
  filteredComp.push(companies[i]);
}
console.log("Filtered Companies: ", filteredComp); // Outputs ["Facebook
