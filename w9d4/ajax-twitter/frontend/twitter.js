const FollowToggle = require("./follow_toggle");
const UsersSearch = require("./users_search");

$(() => {
  $("button.follow-toggle").each( (i, button) => new FollowToggle($(button)) );

  $("nav.users-search").each( (i, el) => new UsersSearch($(el)));
});