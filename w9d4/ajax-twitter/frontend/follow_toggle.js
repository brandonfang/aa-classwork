const APIUtil = require("./api_util");

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
