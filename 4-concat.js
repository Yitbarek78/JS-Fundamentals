const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("No argument");
} else {
  console.log(`Python is fun`)
  console.log(`javascript`)
  console.log(` ${args[0]} is ${args[1]} `);
}
