// testing script associated with basic_setup.html file

const PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',
});

const post1 = new PostModel({
  id: 1,
});
