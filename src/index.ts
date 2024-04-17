const Varname = process.env.Name;

console.log(`Hello from ${Varname}!`);

const addNums = (a: number, b: number) => {
  return a + b;
};

console.log(addNums(2, 7));
