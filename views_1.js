var FruitList = Backbone.View.extend({
});

var fruitView = new FruitList();

// fruitView.$el.appendTo(document.body);

var FruitList = Backbone.View.extend({
  initialize: function (fruits) {
    this.collection = fruits;
  },
});

// var fruitView = new FruitList(fruits);

var fruitView = new FruitList({
  collection: fruits,
});

// -----------------------------------------------------------------------------

var FruitList = Backbone.View.extend({
  tagName: 'main',
  id: 'fruit',
  className: 'tropical',
  template: fruitTemplate,
  attributes: {},
  
  render: function () {
    this.$el.html(this.template({
      fruits: this.collection.toJSON(),
    }));
  },
  
  initialize: function () {
    this.render();
  },
});

var fruitView = new FruitList({ collection:fruits });

// -----------------------------------------------------------------------------

var FruitList = Backbone.View.extend({
  tagName: 'main',
  id: 'fruit',
  className: 'tropical',
  template: fruit_template,

  events: {
    'click a.add': 'addToCart',
  },

  render: function () {
    this.$el.html(this.template({
      fruits: this.collection.toJSON(),
    }));
  },

  addToCart: function (e) {
    e.preventDefault();

    // ...
  },

  initialize: function () {
    this.render();
    // this.listenTo(this.collection, 'change', this.render);
  },
});

// this.$el.on('click', 'a.add', this.addToCart.bind(this));

var fruitView = new FruitList({ collection: fruits });
