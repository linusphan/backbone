var PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',

  initialize: function () {
    // if (!this.get('id')) {
    //   this.set('id', this.collection.nextID());
    // }
  },
});

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://jsonplaceholder.typicode.com/posts',
  lastID: 0,
  
  setLastID: function () {
    if (this.isEmpty()) { return; }

    this.lastID = this.last().get('id');
  },

  nextID: function () {
    return ++this.lastID;
  },

  initialize: function () {
    // this.on('sync', this.setLastID);
  },
});

// -----------------------------------------------------------------------------

var blogRoll = new Posts();
blogRoll.fetch({
  async: false,
  reset: true,
  success: function (collection) {
    // ...
  },
});

// -----------------------------------------------------------------------------

var newPost = blogRoll.create({
  title: 'My new blog post',
  body: 'Latest blog post.',
  userID: 1,
});

// -----------------------------------------------------------------------------

var postsByAuthor1 = blogRoll.where({ userID: 1 });

// -----------------------------------------------------------------------------

// console.log(blogRoll.first().toJSON()); // id: 1
blogRoll.comparator = "title";
blogRoll.sort();
// console.log(blogRoll.first().toJSON()); // id: 30

// -----------------------------------------------------------------------------

// var firstPost = blogRoll.get('1');
// console.log(firstPost);

// console.log(blogRoll.toJSON());

// blogRoll.set({
//   id: 1,
//   userId: 1,
//   title: 'My First Post',
//   body: 'This is my first blog post! Yay!',
// });

// -----------------------------------------------------------------------------

// var newPost = blogRoll.add({
//   title: "My New Blog Post",
//   body: "This is my latest blog post. I hope you like it!",
//   userID: 1,
// });

// newPost.save();
// console.log(newPost.get('id'));

// -----------------------------------------------------------------------------

var usersData = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  }, {
    id: 3,
    name: "Clementine Bauch",
  },
];

var User = Backbone.Model.extend({});
var Users = Backbone.Collection.extend({
  model: User,
});

var blogAuthors = new Users();

blogAuthors.reset(usersData);

// console.log(blogAuthors.models);
// -----------------------------------------------------------------------------
