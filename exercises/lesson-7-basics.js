// LESSON 7: VARIABLES AND DATA TYPES
const studentName="Kevin"; // string: text
let studentAge=20; // number
const isLearningJavaScript=true; // boolean: true or false
let favouriteSubject=null; // null: intentionally empty
console.log(studentName,studentAge,isLearningJavaScript,favouriteSubject);

// FUNCTIONS: reusable blocks of code.
function greetStudent(name){return `Hello, ${name}! Keep practising JavaScript.`;}
console.log(greetStudent(studentName));

// CONDITIONS: choose what happens.
function checkPassMark(score){if(score>=50){return "Pass";}else{return "Needs improvement";}}
console.log(checkPassMark(72));

// LOOPS: repeat an instruction.
for(let number=1;number<=5;number+=1){console.log("Count:",number);}

// PRACTICE: change the values, refresh, and inspect the browser console.
function getTip(bill,percentage){return bill*(percentage/100);}
console.log("Tip on KSh 1000 at 10%:",getTip(1000,10));