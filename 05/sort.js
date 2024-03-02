const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24, 87, 78];

let medTerm = Math.floor(ages.length / 2);

if (ages.length % 2 == 0) {
  let avg = (ages[medTerm - 1] + ages[medTerm]) / 2;
  console.log(avg);
} else {
  console.log(ages[medTerm]);
}
