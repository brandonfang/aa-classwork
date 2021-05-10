Function.prototype.inherits = function (Parent) {
    function Surrogate() { };
    Surrogate.prototype = Parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}



function MovingObject() {}

MovingObject.prototype.hello = () => {
    console.log("hello world")
}

function Ship(name) { 
    this.name = name;
}

Ship.inherits(MovingObject);

// function Asteroid() { }
// Asteroid.inherits(MovingObject);

s = new Ship("ship")

s.hello()