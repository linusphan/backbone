const postHTML = $('#post').html();

function renderPost(model) {
  const $post = $(postHTML);

  $post.find('h1').text(model.get('title'));
  $post.find('header p').text(`By ${model.get('user').get('name')}`);
  $post.find('header + p').text(model.get('body'));
  $(document.body).html($post);
}

const UserModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/users'
});

const PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',
  
  setUser: function () {
    const self = this;
    const user = new UserModel({
      id: this.get('userId'),
    });

    user.fetch({
      success: function (model) {
        self.set('user', model);
        console.log(self.toJSON());
      }
    });
  },

  initialize: function () {
    this.has('userId') && this.setUser();
    this.on('change:userId', this.setUser);
    this.on('change', function (model) {
      this.has('user') && renderPost(model);
    });
  },
});

const post1 = new PostModel({
  id: 1,
});

post1.fetch();

const post2 = new PostModel({
  id: 2, 
  title: 'My new post',
  body: 'This is my new blog post.',
  userId: 2,
});
