function sum1() {
  let args = Array.from(arguments);
  return args.reduce(function(acc, ele) {
    return acc + ele;
  });
}

function sum2(...args) {
  return args.reduce(function (acc, ele) {
    return acc + ele;
  });
}

Function.prototype.myBind1 = function (context) {
  const that = this;
  let bindArgs = Array.from(arguments).slice(1);

  return function () {
    let callArgs = Array.from(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  };
}

Function.prototype.myBind2 = function (context, ...bindArgs) {
  const that = this;

  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(...callArgs));
  }
}

function curriedSum(numArgs) {
  let numbers = [];

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, ele) => acc + ele);
    } else {
      return _curriedSum;
    }
  };
}







// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// markov.says.myBind2(pavlov, "meow", "Kush")();
// markov.says.myBind2(pavlov)("meow", "a tree");
// markov.says.myBind2(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");