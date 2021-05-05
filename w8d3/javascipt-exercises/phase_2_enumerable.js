Array.prototype.myEach = function(callback) {
// Array.prototype.myEach = (callback) => {
    // for (let i= 0; i < this.length; i++) {
    this.forEach(ele => {
        callback(ele);
    });
}

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach(ele => {
        result.push(callback(ele));
    });
    return result
}

Array.prototype.myReduce = function(callback, initialValue ) {
    let acc = initialValue;
    let arr = this;
    if (acc === undefined) {
        acc = this[0];
        arr = this.slice(1);
    }
    arr.myEach(ele => {
        acc = callback(acc, ele);
    })
    return acc;
}
    