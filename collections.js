var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var myTodo = new Todo({title: '....', id: 2});
var todos = new TodosCollection([myTodo]);
console.log('collection size: ' + todos.length);

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var a = new Todo({title: '....'}),
    b = new Todo({title: '...'}),
    c = new Todo({title: '.....'});

var todos = new TodosCollection([a, b]);
todos.add(c);
todos.remove([a,b]);
todos.remove(c);

var items = new Backbone.Collection;
items.add([{id: 1, name: 'dog', age: 3}, {id: 2, name: 'cat', age: 2}]);
items.add([{id: 1, name: 'bear'}], {merge: true});
items.add([{id: 2, name: 'lion'}]);
console.log(JSON.stringify(items.toJSON()));

var myTodo = new Todo({title: '...', id: 2});
var todos = new TodoCollection([myTodo]);
var todo2 = todos.get(2);
console.log(todo2 === myTodo);

var todoCid = todos.get(todo2.cid);
console.log(todoCid === myTodo);

var TodosCollection = new Backbone.Collection();

TodosCollection.on('add', function (todo) {
  console.log(`I should ${todo.get('title')}. Have I done it before? ${todo.get('completed') ? 'yeah!' : 'No.'}`);
});

TodosCollection.add([
  {title: 'go to Jamaica', completed: false},
  {title: 'go to China', completed: false},
  {title: 'go to Disneyland', completed: true}
]);

var TodosCollection = new Backbone.Collection();
TodosCollection.on('change:title', function (model) {
  console.log('I changed my mind! I should ' + model.get('title'));
});
TodosCollection.add([
  {title: 'go to Jamaica.', completed: false, id: 3},
]);

var myTodo = TodosCollection.get(3);
myTodo.set('title', 'go fishing');

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  }
});

var myTodo = new Todo();
myTodo.set({title: 'buy some cookies', completed: true});
myTodo.on({
  'change:title': titleChanged,
  'change:completed': stateChanged
});

function titleChanged() {
  console.log('The title was changed!');
}

function stateChanged() {
  console.log('The state was changed!');
}

myTodo.set({title: 'Get the groceries'});

var TodoCounter = { counterA: 0, counterB: 0 };
_.extend(TodoCounter, Backbone.Events);

var incrA = function () {
  TodoCounter.counterA += 1;
  TodoCounter.trigger('event');
};

var incrB = function () {
  TodoCounter.counterB += 1;
};

TodoCounter.once('event', incrA);
TodoCounter.once('event', incrB);

TodoCounter.trigger('event');

console.log(TodoCounter.counterA === 1); // true
console.log(TodoCounter.counterB === 1); // true

var TodosCollection = new Backbone.Collection();

TodosCollection.add([
  {id: 1, title: 'go to Jamaica.', completed: false},
  {id: 2, title: '...', completed: false},
  {id: 3, title: '...', completed: true},
]);

TodosCollection.on('add', function (model) {
  console.log(`Added ${model.get('title')}`);
});

TodosCollection.on('remove', function (model) {
  console.log(`Removed ${model.get('title')}`);
});

TodosCollection.on('change:completed', function (model) {
  console.log(`Completed ${model.get('title')}`);
});

TodosCollection.set([
  { id: 1, title: 'go to Jamaica.', completed: true},
  { id: 2, title: '...', completed: false},
]);

var TodosCollection = new Backbone.Collection();

TodosCollection.on('reset', function () {
  console.log('Collection reset.');
});

TodosCollection.add([
  {id: 1, title: 'go to Jamaica.', completed: false},
  {id: 2, title: '...', completed: false},
  {id: 3, title: '...', completed: true},
]);

TodosCollection.reset([
  { title: 'go to Cuba.', completed: false };
]);

myCollection.reset();

var todo = new Backbone.Model();
var todos = new Backbone.Collection([todo])
  .on('reset', function (todos, options) {
    console.log(options.previousModels);
    console.log([todo]);
    console.log(options.previousModels[0] === todo); // true
  });

todos.reset();

var Beatle = Backbone.Model.extend({
  defaults: {
    job: 'musician',
  },
});

var john = new Beatle({ firstName: 'John', lastName: 'Lennon' });
var theBeatles = new Backbone.Collection([john]);
var pete = new Beatle({ firstName: 'Pete', lastName: 'Best' });
theBeatles.set([john, pete]);

var todos = new Backbone.Collection();

todos.add([
  { title: '...', completed: false }
]);

todos.forEach(function (model) {
  console.log(model.get('title'));
});

var sortedByAlphabet = todos.sortBy(function (todo) {
  return todo.get('title').toLowerCase();
});

console.log('- Now sorted: ');

sortedByAlphabet.forEach(function (model) {
  console.log(model.get('title'));
});

var count = 1;
console.log(todos.map(function (model) {
  return count++ + '. ' + model.get('title');
}));

todos.max(function (model) {
  return model.id;
}).id;

todos.min(function (model) {
  return model.id;
}).id;

var captions = todos.pluck('caption');
// returns list of captions

var Todos = Backbone.Collection.extend({
  model: Todo,
  filterById: function (ids) {
    return this.filter(function (c) {
      return _.contains(ids, c.id);
    });
  },
});

var people = new Backbone.Collection();
people.comparator = function (a, b) {
  return a.get('name') < b.get('name') ? -1 : 1;
};

var tom = new Backbone.Model({ name: 'Tom' });
var rob = new Backbone.Model({ name: 'Rob' });
var tim = new Backbone.Model({ name: 'Tim' });

people.add(tom);
people.add(rob);
people.add(tim);

console.log(people.indexOf(rob) === 0);
console.log(people.indexOf(tim) === 1);
console.log(people.indexOf(tom) === 2);

todos.any(function (model) {
  return model.id === 100;
});

todos.some(function (model) {
  return model.id === 100;
});

todos.size();
todos.length();

var isEmpty = todos.isEmpty();

var todos = new Backbone.Collection();
todos.add([
  { title: '...', completed: false },
  { title: '...', completed: false },
  { title: '...', completed: true },
]);

var byCompleted = todos.groupBy('completed');
var completed = new Backbone.Collection(byCompleted[true]);
console.log(completed.pluck('title'));

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
  },
});

var todo = new Todo({ title: 'go to Austria' });
console.log(todo.pick('title'));

var todo = new Todo({ title: 'go to Austria' });
console.log(todo.omit('title'));

todo.keys();
todo.values();

var pairs = todo.pairs();
console.log(pairs[0]);
console.log(pairs[1]);

todo.invert();
