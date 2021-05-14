/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
  followUser: (id) => {
    return $.ajax({
        url: `/users/${id}/follow`,
        method: 'POST',
        dataType: 'json',
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
        url: `/users/${id}/follow`,
        method: 'DELETE',
        dataType: 'json',
    });
  },

  searchUsers: (queryVal) => {
    return $.ajax({
      url: '/users/search',
      dataType: 'json',
      data: { query: queryVal }
    });
  }, 

 
};

module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = this.$el.data("initial-follow-state") || options.followState;

    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "followed") {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
  }

  handleClick() {
    const followToggle = (followState) => {
      this.followState = followState;
      this.render();
    };

    this.$el.on('click', (e) => {
      e.preventDefault();
      if (this.followState === 'unfollowed') {
        APIUtil.followUser(this.userId).then(followToggle('followed'));
      } else {
        APIUtil.unfollowUser(this.userId).then(followToggle('unfollowed'));
      }
    });

  }
}

module.exports = FollowToggle;


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $('#users-search-input');
    this.$ul = $('ul.users');

    this.handleInput();
  }

  handleInput() {
    $(this.$input).on('input', (e) => {
      let inputVal = this.$input.val();

      APIUtil.searchUsers(inputVal).then((results) => this.renderResults(results));
    });
  }

  renderResults(results) {
    this.$ul.empty();
    console.log(results);
    results.forEach((result) => {
      let $li = $('<li class="search-result">');
      $li.html(`<a href="/users/${result.id}">@${result.username}</a>`);

      let $button = $(`<button class="follow-toggle"></button>` )
      let options = {
        userId: result.id, 
        followState: result.followed ? "followed" : "unfollowed"
      }
      new FollowToggle($button, options);
      console.log($button);

      $li.append($button);
      this.$ul.append($li);
    })
  }

}

module.exports = UsersSearch;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");
const UsersSearch = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js");

$(() => {
  $("button.follow-toggle").each( (i, button) => new FollowToggle($(button)) );

  $("nav.users-search").each( (i, el) => new UsersSearch($(el)));
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map