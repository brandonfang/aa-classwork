function range(start, end) {
    if (start > end) { return false };
    if (start === end) { return [end] };
    return [start].concat(range(start + 1, end));
    // return (range(start, end - 1).push(end));
}


function sumRec(arr) {
    if (arr.length === 0) {return 0};
    return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
    if (exp === 0) {return 1};

    return base * exponent(base, exp - 1);
}

function exponent_2(base, exp) {
    if (exp === 0) {return 1};
    if (exp === 1) {return base};

    if (exp % 2 === 0) {
        return exponent_2(base, exp/2) * exponent_2(base, exp / 2)
    } else {
        return base * exponent_2(base, (exp - 1) / 2) * exponent_2(base, (exp - 1) / 2)
    };
}

function fibonacci(n) {
    if (n < 1) {return false}
    if (n === 1) {return [0]}
    if (n === 2) {return [0, 1]}

    let temp = fibonacci(n-1)

    return temp.concat([temp[temp.length-2] + temp[temp.length-1]])
}

function deepDup(arr) {
    if (!Array.isArray(arr)) {return arr};

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i]);
        } else {
            result.push(deepDup(arr[i]));
        }
    }
    return result;
}

function bsearch(arr, target) {
    if (arr.length < 2 && arr[0] !== target) { return -1 };
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) {
        return bsearch(arr.slice(0, mid), target);
    } else {
        if (bsearch(arr.slice(mid + 1), target) !== -1) {
            return bsearch(arr.slice(mid + 1), target) + mid + 1;
        } else {
            return -1;
        }
    }
}
