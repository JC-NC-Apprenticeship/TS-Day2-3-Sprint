# TS Converters

TypeScript Language Track Day 2 -3

## Intro

Hopefully we're starting to see some of the benefits to TypeScript. This repo contains a utility library written in vanilla JS. We want to continually maintain this as a TypeScript Project

## Day 1

### Core Tasks

1. Set up your tsconfig.json
2. Convert over the functions in the basic utils file (See the notes on Testing in TypeScript _and_ the Step-By-Step Conversion Guide
   - don't forget to change your test script to use a pre-processor(in our case `ts-mocha`) to look for ts files
     - see the testing notes for info on how the script should look

(_Hint_ - you will need to install typescript, ts-mocha and @types/node to be able to run anything in TypeScript)

### Stretch Tasks

1. Convert the test files into TypeScript
   - you will need to think about how you export and require in functions so TypeScript can check the types!

### Extra Tasks

1. Take a look at the Ramda documentation [https://ramdajs.com/docs] and try and implement the following

- `concat`
- `drop`

2. If you get through all that start having a research for the lecture tomorrow [https://www.typescriptlang.org/docs/handbook/2/generics.html]

### Hints

- You will likely need to look into how you can find types for the external libraries you're using. Look into "DefinitelyTyped" to see how it can help you!
- If you're unsure of what to type the data as, take hints from the way it's used in the tests to for basic-utils. We will look at more complex alternatives a little later (generic-utils)

## Day 2

### Core Tasks

1. Work through converting the first three generic utils files (filter, map and once)

### Stretch tasks

1. Convert before and spread utils
2. Convert all generic utils test files

### Extra Tasks

1. Write and test your own version of reduce in TypeScript
   See (here)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce]

2. Add, type and test (with TDD) the functionality for each generic function to be curried

For example this would allow for filter to behave as follows:

```ts
const arr = [1, 2, 3, 4, 5];
const filterOdds = filter(isOdd);
const onlyOdds = filterOdds(arr);
console.log(onlyOdds); //[1, 3, 5]
```

3. Make the compiler output usable by JS and TS users alike
   See if you can discover a way to include some type definitions in your compiler output so the utility library can be used in other TS projects!
