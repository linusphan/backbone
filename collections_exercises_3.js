var template = Handlebars.compile($('#users').html());

var User = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
})

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

function renderCollection() {
  document.body.innerHTML = template({ users: blogWriters.toJSON() });
}

var blogWriters = new Users();

// blogWriters.fetch({
//   success: function () {
//     blogWriters.create({ name: 'John Doe', email: 'JohnDoe@example.com' }, {
      
//       success: function () {
//         blogWriters.fetch({
//           reset: true,
//           success: function () {
//             console.log(blogWriters.toJSON());
//           },
//         });
//       },
//     });
//   },
// });

blogWriters.fetch();
