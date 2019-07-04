// https://addyosmani.com/backbone-fundamentals/#views-1

var TodoView = Backbone.View.extend({
  tagName: 'li',
  todoTpl: _.template('An example template'),

  events: {
    'dbclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close',
  },

  initialize: function (optionss) {
    this.options = options || {}; // For Backbone 1.1.0 ...
  },

  render: function () {
    this.$el.html(this.todoTpl(this.model.attributes));
    this.input = this.$('.edit');
    return this;
  },

  edit: function () {},

  close: function () {},

  updateOnEnter: function () {},
});

var todoView = new TodoView();
console.log(todoView.el);

// -----------------------------------------------------------------------------

var TodosView = Backbone.View.extend({
  tagName: 'ul',
  className: 'container',

  id: 'todos',
});

var todosView = new TodosView();
console.log(todosView.el);

// var todosView = new TodosView({el: $('#footer')});

var button1 = $('<button></button>');
var button2 = $('<button></button>');

var View = Backbone.View.extend({
  events: {
    click: function (e) {
      console.log(view.el === e.target);
    },
  },
});

var view = new View({ el: button1 });
view.setElement(button2);

button1.trigger('click');
button2.trigger('click'); // => true

// -----------------------------------------------------------------------------

// var ListView = Backbone.View.extend({
//   template: _.template($('#list_template').html()),

//   render: function () {
//     this.$el.html(this.template(this.model.attributes));
//     return this;
//   },
// });

// -----------------------------------------------------------------------------

var ItemView = Backbone.View.extend({
  events: {},
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
});

var ListView = Backbone.View.extend({
  render: function () {
    var items = this.model.get('items');

    _.each(items, function (item) {
      var itemView = new ItemView({ model: item });

      this.$el.append( itemView.render().el );
    }, this);
  },
});


// -----------------------------------------------------------------------------

var TodoView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click .toggle': 'toggleCompleted',
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'click .destroy': 'clear',
    'blur .edit': 'close',
  },
});

// -----------------------------------------------------------------------------

var TodoView = Backbone.View.extend({
  initialize: function () {
    this.model.bind('change', _.bind(this.render, this));
  },
});
