// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks 일부 및 모든 확인
// Array.prototype.some()
// is at least one person 19 or older? 적어도 한 사람은 19세 이상입니까?
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

const isAdult1 = people.some((person) => {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) {
    return true;
  }
});

console.log({ isAdult });
console.log(isAdult1);

// Array.prototype.every()
// is everyone 19 or older? 모두 19세 이상입니까?
const allAdult = people.every(
  (person) => new Date().getFullYear - person.year >= 19
);
console.log(allAdult);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// 찾기는 필터와 비슷하지만 대신 찾고 있는 것만 반환합니다.
// find the comment with the ID of 823423
// ID가 823423인 댓글을 찾습니다.
const comment = comments.find(function (comment) {
  if (comment.id == 823423) {
    return true;
  }
});

const comment1 = comments.find((comment) => comment.id == 823423);
console.log(comment);
console.log(comment1);

// Array.prototype.findIndex()
// Find the comment with this ID
// 이 ID로 댓글 찾기
// delete the comment with the ID of 823423
// ID가 823423인 댓글 삭제
const index = comments.findIndex((comment) => comment.id === 823423);

// comments.splice(index, 1);
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(comments);
console.table(newComments);
