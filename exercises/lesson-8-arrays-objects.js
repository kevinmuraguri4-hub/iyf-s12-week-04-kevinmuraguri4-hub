// ARRAYS: ordered lists of values.
const scores=[45,82,67,91,38];
console.log("map (divide by 10):",scores.map(score=>score/10));
console.log("filter (passing):",scores.filter(score=>score>=50));
const total=scores.reduce((sum,score)=>sum+score,0);
console.log("reduce (average):",total/scores.length);
console.log("find (first above 80):",scores.find(score=>score>80));

// OBJECTS: related information stored as key-value pairs.
const student={name:"Amina",age:19,score:84,subjects:["HTML","CSS","JavaScript"]};
console.log("Student name:",student.name);
student.score=90; // update a property
student.city="Nairobi"; // add a property
console.log("Updated object:",student);

// JSON: a text format for sharing or storing data.
const jsonText='{"name":"Brian","score":76}';
const parsedStudent=JSON.parse(jsonText);
console.log("Parsed name:",parsedStudent.name);
console.log("Object as JSON text:",JSON.stringify(parsedStudent));

// PRACTICE: change the data and predict the output first.