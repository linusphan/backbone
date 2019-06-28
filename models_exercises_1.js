// exercise 1

var PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts'
});

// exercise 2

var post1 = new PostModel({ id: 1 });
// Works, but accessing attributes directly may lead to accidental attribute modification
console.log(post1.attributes);
// Will safely collect post1's attributes into a new plain object to avoid accidental attribute modification
console.log(post1.toJSON());

// exercise 3

post1.fetch({
  success: function (model) {
    console.log(model.toJSON());
  }
});

// exercise 4

var UserModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/users"
});

var user = new UserModel({ id: post1.get("userId") });

user.fetch({
  success: function(model) {
    console.log(model.toJSON());
  }
});

// exercise 5

post1.set("user", user);
console.log(post1.toJSON());

// exercise 6

var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  setUser: function() {
    var self = this,
        user = new UserModel({ id: self.get("userId") });

    user.fetch({
      success: function(model) {
        self.set("user", model);
        console.log(self.toJSON());
      }
    });
  }
});

var post_1 = new PostModel({ id: 1 });

post_1.fetch({
  success: function(model) {
    model.setUser();
  }
});

// exercise 7

var post_1 = new PostModel({ id: 1 });

post_1.on("change:userId", post_1.setUser);
post_1.fetch();

// exercise 8

var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  setUser: function() {
    var self = this,
        user = new UserModel({ id: self.get("userId") });

    user.fetch({
      success: function(model) {
        self.set("user", model);
        console.log(self.toJSON());
      }
    });
  },
  initialize: function() {
    this.on("change:userId", this.setUser);
  }
});

var post_1 = new PostModel({ id: 1 });
post_1.fetch();

// exercise 9

var post_2 = new PostModel({
  id: 2,
  title: "My New Post",
  body: "This is my new blog post. Hope you enjoy it!",
  userId: 2
});

// exercise 10

var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  setUser: function() {
    var self = this,
        user = new UserModel({ id: self.get("userId") });

    user.fetch({
      success: function(model) {
        self.set("user", model);
        console.log(self.toJSON());
      }
    });
  },
  initialize: function() {
    this.has("userId") && this.setUser();
    this.on("change:userId", this.setUser);
  }
});

// exercise 11

/*
<script id="post" type="text/template">
  <article>
    <header>
      <h1>Title here</h1>
      <p>By *user name*</p>
    </header>
    <p>Post body here</p>
  </article>
</script>
*/

var post_html = $("#post").html();

function renderPost(model) {
  var $post = $(post_html);

  $post.find("h1").text(model.get("title"));
  $post.find("header p").text("By " + model.get("user").get("name"));
  $post.find("header + p").text(model.get("body"));
  $(document.body).html($post);
}

// exercise 12

var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
  setUser: function() {
    var self = this,
        user = new UserModel({ id: self.get("userId") });

    user.fetch({
      success: function(model) {
        self.set("user", model);
        console.log(self.toJSON());
      }
    });
  },
  initialize: function() {
    this.has("userId") && this.setUser();
    this.on("change:userId", this.setUser);
    this.on("change", renderPost);
  }
});

post_2.set("title", "My Changed Post");
