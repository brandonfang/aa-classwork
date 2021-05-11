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

// use an args array
Function.prototype.curry = function (numArgs) {
  let args = [];
  const that = this;
  return function _greenCurry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args)
    } else { 
      return _greenCurry; 
    }
  } 
}

// use ... operator
Function.prototype.curry2 = function (numArgs) {
  let args = [];
  const that = this;
  return function _greenCurry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args)
    } else { 
      return _greenCurry;
    }
  }
}

// use ... operator and es6 syntax
Function.prototype.curry3 = function (numArgs) {
  let args = [];
  const _greenCurry =  (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args)
    } else { 
      return _greenCurry; 
    }
  }
  return _greenCurry
}