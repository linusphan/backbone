Handlebars.registerPartial('post', $('#post').html());

var Post = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',
  initialize: function () {
  },
});

var Posts = Backbone.Collection.extend({
  comparator: 'title',
  url: 'http://jsonplaceholder.typicode.com/posts',
  model: Post,
});

var PostView = Backbone.View.extend({
  tagName: 'article',
  template: Handlebars.compile($('#post').html()),
  events: {
    'click h1': 'logMe',
  },

  logMe: function () {
    console.log(this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    $('main').prepend(this.$el);
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
});

var PostsView = Backbone.View.extend({
  el: $('main').get(0),
  template: Handlebars.compile($('#posts_template').html()),
  render: function () {
    this.$el.html(this.template({ posts: this.collection.toJSON() }));
  },
  initialize: function (options) {
    this.listenToOnce(this.collection, 'sync', this.render);
  },
});

var blogPosts = new Posts();
var postsPage = new PostsView({ collection: blogPosts });

blogPosts.fetch();

$('form').on('submit', function (e) {
  e.preventDefault();

  var $form = $(this);
  var data = {
    title: $form.find("[name=title]").val(),
    body: $form.find("[name=body]").val(),
  };

  const model = blogPosts.create(data);
  const postView = new PostView({ model: model });
});
