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

var Todo = Backbone.Model.extend({});
var todo1 = new Todo();
console.log(JSON.stringify(todo1)); // => {}

var todo2 = new Todo({
  title: 'Check the attributes of both model instances in the console.',
  completed: true,
});
console.log(JSON.stringify(todo2)); // => {"title": "Check..","completed": true}

var Todo = Backbone.Model.extend({
  initialize: function () {
    console.log('This model has been initialized.');
  },
});

var myTodo = new Todo(); // => Logs: This model...

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },
});

var todo1 = new Todo();
console.log(JSON.stringify(todo1)); // => {"title":"","completed":false}

var todo2 = new Todo({
  title: "Check attributes of the logged models in the console."
});

console.log(JSON.stringify(todo2));

var todo3 = new Todo({
  title: 'This todo is done, so take no action on this one.',
  completed: true,
});
console.log(JSON.stringify(todo3)); // => {"title":"This ...","completed":true}

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  }
});

var todo1 = new Todo();
var todo1Attributes = todo1.toJSON();
console.log(todo1Attributes); // => {"title": "","completed":false}

var todo2 = new Todo({
  title: 'Try these examples and check the results in the console.',
  completed: true,
});

console.log(todo2.toJSON()); // => {"title":"Try...","completed":true}

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },
});

var myTodo = new Todo({
  title: 'Set through instantiation.',
});
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Set through...
console.log('Completed: ' + myTodo.get('completed')); // Completed: false

myTodo.set('title', 'Title attr set through Model.set()');
myTodo.set({
  title: '...',
  completed: true,
});

var Person = new Backbone.Model();
Person.on('change:name', function () {
  console.log('Name changed');
});
Person.set({name: 'Andrew'}); // logging occurs
Person.set({name: 'Jeremy'}, {silent: true}); // no logging

console.log(Person.hasChanged('name')); // true - change was recorded
console.log(Person.hasChanged(null)); // true - something (anything) has changed

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },

  initialize: function () {
    console.log('This model has been initialized');
    this.on('change', function () {
      console.log('- Values for this model have changed.');
    });
  },
});

var myTodo = new Todo();
myTodo.set(
  'title',
  'The listener is triggered whenever an attribute value changes.'
);
console.log('Title has changed: ' + myTodo.get('title'));
myTodo.set('completed', true);
myTodo.set({
  title: 'Changing more than one attribute at the same time only triggers the listener once.',
  completed: true,
});
