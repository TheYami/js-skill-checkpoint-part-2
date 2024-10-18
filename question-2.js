const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let studentScoreMoreThan50 = students.filter(student => student.score > 50);

let addScore = studentScoreMoreThan50.map(scoreAdd => ({name:scoreAdd.name,score:scoreAdd.score += (scoreAdd.score * 0.1)}));

console.log(addScore);

let totalScore = addScore.reduce((acc,cur) => acc + cur.score ,0);

console.log(`Total score is ${totalScore}`);

