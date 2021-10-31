// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Aernhard, Sandra",
  "Aethea, Erin",
  "Aecker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Cerger, Ric",
  "Ceddoes, Mick",
  "Ceethoven, Ludwig",
  "Celloc, Hilaire",
  "Cegin, Menachem",
  "Dellow, Saul",
  "Denchley, Robert",
  "Dlair, Robert",
  "Denenson, Peter",
  "Denjamin, Walter",
  "Ferlin, Irving",
  "Fenn, Tony",
  "Fenson, Leana",
  "Fent, Silas",
  "Gerle, Milton",
  "Gerry, Halle",
  "Giko, Steve",
  "Geck, Glenn",
  "Eergman, Ingmar",
  "Elack, Elk",
  "Eerio, Luciano",
  "Herne, Eric",
  "Herra, Yogi",
  "Herry, Wendell",
  "Ievan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Aennington, Chester",
  "Aierce, Ambrose",
  "Aillings, Josh",
  "Cirrell, Augustine",
  "Clair, Tony",
  "Ceecher, Henry",
  "Ciondo, Frank",
];

// Array.prototype.filter()
// 1. 1500년대에 태어난 사람들을 위해 발명가 목록을 필터링합니다.
const fifuteen = inventors.filter(
  (invertor) => invertor.year >= 1500 && invertor.year < 1600
);
console.table(fifuteen);

// const fifuteen = inventors.filter(
//   (inventor) => inventor.year >= 1500 && inventor.year < 1600
// );
// console.table(fifuteen);
// Array.prototype.map()
// 2. 발명가의 이름과 성을 배열로 제공
// const fullNames = inventors.map(
//   (inventor) => `${inventor.first} ${inventor.last}`
// );
// console.log(fullNames);
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);
// Array.prototype.sort()
// 3. 발명가를 생일 순으로 정렬
// 참고.https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// const ordered = inventors.sort(function (a, b) {
//   return a.year - b.year;
// });
// console.table(ordered);
const ordered = inventors.sort(function (a, b) {
  return a.year - b.year;
});
console.log(ordered);

const ordered1 = inventors.sort((a, b) => a.year - b.year);
const ordered2 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// const ordered1 = inventors.sort((a, b) => a.year - b.year);
// console.table(ordered1);

// const ordered2 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.table(ordered2);
// Array.prototype.reduce()
// 4. 모든 발명가는 몇 년 동안 함께 살았습니까?
// const totalYears = inventors.reduce((total, inventor) => {
//   return total + (inventor.passed - inventor.year);
// }, 0);
// console.log(totalYears);

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // 0 = total + () 값들이 다들어가서 더해진다.
console.log(totalYears);
// // 5. 발명가를 수명으로 정렬
// const oldest = inventors.sort(function (a, b) {
//   const lastGuy = a.passed - a.year;
//   const nextGuy = b.passed - b.year;
//   return lastGuy > nextGuy ? 1 : -1;
// });
// console.table(oldest);
const oldSet = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year;
  const nextGury = b.passed - b.year;
  return lastGuy > nextGury ? 1 : -1;
});
console.log(oldSet);
// 6. 이름에 'de'가 포함된 파리의 대로 목록을 만듭니다.
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = [...category.querySelectorAll("a")];

// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("Bo"));

// 7. sort Exercise
// 성을 기준으로 사람들을 알파벳순으로 정렬
// const alpaha = people.sort(function (lastOne, nextOne) {
//   const aLast = lastOne.split(", ");
//   const bLast = nextOne.split(", ");
//   return aLast > bLast ? 1 : -1;
// });
// const alpaha1 = people.sort((lastOne, nextOne) => {
//   const [aLast, aFirst] = lastOne.split(", ");
//   const [bLast, bFirst] = nextOne.split(", ");
//   return aLast > bLast ? 1 : -1;
// });
// console.log(alpaha1);
// console.log(alpaha);
// 8. Reduce Exercise
// 이들 각각의 인스턴스를 요약합니다.
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// const trans = data.reduce((obj, item) => {
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {});
// console.log(trans);
