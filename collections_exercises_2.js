// using async false property for clearer debugging purposes here only

var User = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/users",
});

// var Users = Backbone.Collection.extend({
//   url: 'http://jsonplaceholder.typicode.com/users',
//   model: User,

//   initialize: function () {
//     this.on('sync sort', renderCollection);
//   },
// });

var Users = Backbone.Collection.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
  model: User,

  parse: function (response) {
    response.forEach(function (user) {
      user.companyName = user.company.name;
      user.catchPhrase = user.company.catchPhrase;
      user.companyBs = user.company.bs;

      delete user.company;
    });

    return response;
  },

  initialize: function () {
    this.on('sync sort', renderCollection);
  },
});

var template = Handlebars.compile($('#users').html());

function renderCollection () {
  document.body.innerHTML = template({ users: this.toJSON() })
}

var blogWriters = new Users();
blogWriters.fetch({
  async: false,

  success: function () {
    // console.log(blogWriters.toJSON());
  },
});

var me = new User({
  name: 'John Doe',
  email: 'JohnDoe@example.com',
});

// blogWriters.add(me);

// me.save(null, {
//   success: function () {
//     console.log(blogWriters.toJSON()); 
//   }
// });

blogWriters.create(me, {
  async: false,

  success: function (model) {
    // console.log(model.toJSON());
  },
});

// blogWriters.fetch({
//   reset: false,
//   async: false,

//   success: function () {
//     // console.log(blogWriters.length);
//   },
// });

// blogWriters.set({
//   id: 1,
//   name: 'John Doe',
//   email: 'JohnDoe@example.com',
// });

// console.log(blogWriters.first().toJSON());

blogWriters.comparator = 'name';
blogWriters.sort();

console.log(blogWriters.pluck('email'));
