/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst STANDARD = {\n  COLOR: \"#00FF00\",\n  RADIUS: 50,\n  SPEED: 4\n}\n\nfunction Asteroid(options) {\n  options = options || {};\n  options.pos = options.pos;\n  options.vel = options.vel || Util.randomVec(STANDARD.SPEED);\n  options.radius = STANDARD.RADIUS;\n  options.color = STANDARD.COLOR;\n  \n  MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game() {\n  this.asteroids = this.addAsteroids();\n};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.BG_COLOR = \"#000000\";\nGame.NUM_ASTEROIDS = 100;\n\nGame.prototype.randomPosition = function() {\n  return [getRandomInt(0, Game.DIM_X), getRandomInt(0, Game.DIM_Y)];\n};\n\nfunction getRandomInt(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min) + min);\n}\n\nGame.prototype.addAsteroids = function() {\n  let arr = [];\n\n  for (let i = 0; i < this.numAsteroids; i++) {\n    let asteroid = new Asteroid(this.randomPosition);\n    arr.push(asteroid);\n  }\n\n  return arr;\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  ctx.fillStyle = Game.BG_COLOR;\n  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  for (let i = 0; i < this.asteroids.length; i++) {\n    asteroids[i].draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  for (let i = 0; i < this.asteroids.length; i++) {\n    asteroids[i].move();\n  }\n}\n\nmodule.export = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameView.js":
/*!*************************!*\
  !*** ./src/gameView.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  setInterval(Game.prototype.moveObjects(), 20);\n  setInterval(Game.prototype.draw(), 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/gameView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./gameView */ \"./src/gameView.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let canvasElement = document.getElementById(\"game-canvas\");\n  let ctx = canvasElement.getContext(\"2d\");\n  canvasElement.width = Game.DIM_X;\n  canvasElement.height = Game.DIM_Y;\n\n  let game = new Game();\n  new GameView(game, ctx).start();\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.fill();\n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n  // Allows Child to inherit Parent\n  inherits(Child, Parent) {\n    // function Surrogate() {};\n    // Surrogate.prototype = Parent.prototype\n    // Child.prototype = new Surrogate();\n    // Child.prototype.constructor = this;\n    Child.prototype = Object.create(Parent.prototype);\n    Child.prototype.constructor = Child;\n  },\n  // Return a randomly oriented vector with the given length.\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n  // Find the distance between two positions\n  distance(pos1, pos2) {\n    let [x1, y1, x2, y2] = [...pos1, ...pos2];\n    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);\n  },\n  // Find the norm of a vector\n  norm(vec) {\n    return distance([0, 0], vec);\n  },\n  \n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;