console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2) {
  console.log("odd");
} else {
  console.log("even");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("Price: " + numberOfHotdogs * 2 + " euro");
} else if (numberOfHotdogs < 100) {
  console.log("Price: " + numberOfHotdogs * 1.5 + " euro");
} else if (numberOfHotdogs < 1000000) {
  console.log("Price: " + numberOfHotdogs * 1 + " euro");
} else {
  console.log("Price: " + numberOfHotdogs * 0.1 + " euro");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

//Part 5: Greeting

const userName = "Andrea";
const greeting = "Hello " + (userName === "Andrea" ? "coach" : userName) + "!";

console.log(greeting);
