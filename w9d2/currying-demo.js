const sum = function (...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// console.log(sum(2, 5, -2, 3))

function currier(func, numArgs) {
  let args = [];
  return function helper(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return func(...args);
    } else {
      return helper;
    }
  };
}

// console.log(currier(sum, 4)(2)(5)(-2)(3));
// console.log(currier(sum, 4)(2)(5)(-2)(3)(7));
// console.log(currier(sum, 4)(3));
// console.log(currier(sum, 4)(3)(5, 6, 7, 8)); 

function superCurrier(func, numArgs) {
  let args = [];

  return function helper(...helperArgs) {
    args.push(...helperArgs);

    if (args.length >= numArgs) {
      return func(...args.slice(0, numArgs));
    } else {
      return helper;
    }
  };
}

// console.log(superCurrier(sum, 4)(3)(5, 6, 7, 8, 9, 19, 23));

function superUltraCurrier(func, ctx, numArgs) {
  let args = [];

  return function helper(...helperArgs) {
    args.push(...helperArgs);

    if (args.length >= numArgs) {
      return func.apply(ctx, args.slice(0, numArgs));
    } else {
      return helper;
    }
  };
}

// const mike = {
//   name: "Mikey Mads",
//   greet: function (...args) {
//     return `${args.join(", ")}! I'm ${this.name}`;
//   },
// };

// const zack = {
//   name: "Zacharius the Harmonius",
// };

// console.log(superUltraCurrier(mike.greet, zack, 3)("yo")("hey", "howareya", "what"));
