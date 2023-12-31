const subjects = ["You", "I", "They", "We"];
const verbs = ["love", "hate", "enjoy", "admire"];
const objects = ["programming", "chocolate", "music", "traveling"];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateRandomMessage() {
  const randomSubject = subjects[getRandomIndex(subjects)];
  const randomVerb = verbs[getRandomIndex(verbs)];
  const randomObject = objects[getRandomIndex(objects)];

  return `${randomSubject} ${randomVerb} ${randomObject}.`;
}

const randomMessage = generateRandomMessage();
console.log(randomMessage);

let arr = [1, 2];
let arr2 = arr;
arr2[1] = 5;
console.log(arr2);
console.log(arr);
