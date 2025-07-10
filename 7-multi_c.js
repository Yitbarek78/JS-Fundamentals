const args = process.argv.slice(2);
const x = Number(args[0]);

if (!Number.isInteger(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}

//to work this code in the browser Since browsers don’t have process.argv,
// you’d need to get the number another way — like from a prompt:

// const input = prompt("How many times?");
// const x = Number(input);

// if (!Number.isInteger(x)) {
//   console.log("Missing number of occurrences");
// } else {
//   for (let i = 0; i < x; i++) {
//     console("C is fun");
//   }
// }
