var User = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
})

var Users = Backbone.Collection.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
  model: User,
});


