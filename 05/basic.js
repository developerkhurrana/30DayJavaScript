let companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Cisco Systems",
  "Samgung",

];

let floorMiddle = Math.floor(companies.length / 2);

{
  floorMiddle % 2 !== 0
    ? console.log(
        companies.slice(0, floorMiddle - 1) + companies.slice(floorMiddle + 1)
      )
    : console.log(
        companies.slice(0, floorMiddle) + companies.slice(floorMiddle + 1)
      );
}
