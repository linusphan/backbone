var persons = [
  { name: 'Person 1', colors: ['Blue', 'White', 'Orange'] },
  { name: 'Person 2', colors: ['Red', 'Maroon', 'Gray'] },
  { name: 'Person 3', colors: ['Green', 'Blue', 'Gray'] },
];

var app = {
  bindEvents: function () {
    _.extend(this, Backbone.Events);
    this.on('addPerson', function (person) {
      this.list.add(person);
    });
  },

  init: function () {
    this.bindEvents();
    this.appView = new AppView;
    this.appView.render();
    this.list = new List(persons);
    this.listView = new ListView({ collection: this.list });
    this.listView.render();
  },
};

app.init();
