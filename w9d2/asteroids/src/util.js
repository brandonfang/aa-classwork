const Util = {
  // allows Child to inherit Parent
  inherits(Child, Parent) {
    // function Surrogate() {};
    // Surrogate.prototype = Parent.prototype
    // Child.prototype = new Surrogate();
    // Child.prototype.constructor = this;
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  },
  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },


};

module.exports = Util;
