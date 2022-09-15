const numberOfStudents = 15;
const numberOfMentors = 8;

const totalNumber = numberOfStudents + numberOfMentors;

const percentStudents = Math.round(numberOfStudents/totalNumber * 100);
const percentMentors = Math.round(numberOfMentors/totalNumber * 100);

const messageStudents = "Percentage students: " + percentStudents + "%";
const messageMentors = "Percentage mentors: " + percentMentors + "%";

console.log(messageStudents);
console.log(messageMentors);
