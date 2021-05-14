const APIUtil = require("./api_util");
const FollowToggle = require("./follow_toggle");

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