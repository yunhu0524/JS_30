// 문자열, numbers 및 boolean로 시작
//   let age = 100;
//   let age2 = age;
//   console.log(age, age2);
//   age = 200;
//   console.log(age, age2);

//  let name = 'Wes';
//   let name2 = name;
//   console.log(name, name2);
//   name = 'wesley';
//   console.log(name, name2);

// 배열이 있다고 가정 해 봅시다.
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// 사본을 만들고 싶습니다.
const team = players;
console.log(players, team);
// 다음과 같이 할 수 있다고 생각할 수도 있습니다.:
//team[3] = 'Lux'
// 그러나 해당 배열을 업데이트하면 어떻게 됩니까?

// 이제 여기에 문제가 있습니다!

// 오 아니오 - 우리는 원본 배열도 편집했습니다!

// 왜요? 그것은 배열 복사본이 아니라 배열 참조이기 때문입니다. 둘 다 같은 배열을 가리킵니다!

// 이 문제를 해결하려면 어떻게 해야 합니까? 대신 사본을 가져갑니다!
const team2 = players.slice();
const team3 = [].concat(players);
// team2[3] = 'Lux'
// team2 = (4) ['Wes', 'Sarah', 'Ryan', 'Lux']
// players = (4) ['Wes', 'Sarah', 'Ryan', 'Poppy']
// one way

// or 새 배열을 만들고 이전 배열을 연결하십시오.

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = "heeee hawww";
console.log(team4);

const team5 = Array.from(players);
// 이제 업데이트할 때 원본이 변경되지 않습니다.

// 객체에 대해서도 마찬가지입니다. 사람 객체가 있다고 가정해 보겠습니다.

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};
// 그리고 우리가 사본을 만든다고 생각하십시오:
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
// 대신 사본을 가져오는 방법은 무엇입니까?

// 우리는 곧 개체를 볼 수 있기를 바랍니다 ...spread

// 주의할 점 - 이것은 배열과 객체 모두에 대해 1레벨 깊이입니다.
// lodash에는 cloneDeep 메서드가 있지만 사용하기 전에 두 번 생각해야 합니다.
const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};
console.clear();
console.log(wes);

// 객체를 copy 할때
// 아래 방법은 원본 객체에 영향이 간다.
const dev = Object.assign({}, wes);
// JSON.stringify 스트링 값으로 바꾼 값을
// JSON.parse 다시 배열에 넣는다.
const dev2 = JSON.parse(JSON.stringify(wes));
