const Util = {
  // Allows Child to inherit Parent
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
  // Find the distance between two positions
  distance(pos1, pos2) {
    let [x1, y1, x2, y2] = [...pos1, ...pos2];
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  },
  // Find the norm of a vector
  norm(vec) {
    return distance([0, 0], vec);
  },
  
};

module.exports = Util;
