var Car = Backbone.Model.extend();
var fordFusion = new Car();

fordFusion.set('make', 'Ford').set('model', 'Fusion');

fordFusion.set(
  'fullName',
  `${fordFusion.get('make')} ${fordFusion.get('model')}`
);

fordFusion.unset('make').unset('model');

fordFusion.on('change:fullName', function () {
  console.log(`My new name is ${this.get('fullName')}`);
});

fordFusion.set('fullName', 'Ford Taurus');

fordFusion.on('change destroy', function () {
});

fordFusion.on({
  'change': function () {},
  'destroy': function () {},
});

var carTemplate = Handlebars.compile($('#car_template').html());
$('article').html(carTemplate(fordFusion.toJSON()));

var Car = Backbone.Model.extend({
  defaults: {
    doors: 4,
    wheels: 4,
  },
});

var fordFusion = new Car({
  doors: 2,
  make: 'Ford',
  model: 'Fusion',
});

var Car = Backbone.Model.extend({
  defaults: {
    doors: 4,
    wheels: 4,
  },

  setFullName: function () {
    this.set(
      'fullName',
      `${this.get('make')} ${this.get('model')}`
    );
  },
});

var Car = Backbone.Model.extend({
  defaults: {
    doors: 4,
    wheels: 4,
  },

  setFullName: function () {
    this.set(
      'fullName',
      `${this.get('make')} ${this.get('model')}`
    );
  },

  initialize: function () {
    this.on('change', this.setFullName)
  },
});

var Ford = Car.extend({
  defaults: {
    make: 'Ford',
  },
});

var Ford = Car.extend({
  defaults: function () {
    return _.extend({
      make: 'Ford'
    }, Car.prototype.defaults);
  },
});

// -----------------------------------------------------------------------------
