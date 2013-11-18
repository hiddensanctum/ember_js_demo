App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts', function() {
    this.resource('post', { path: ':post_id' });
  });
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

App.PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,

  edit: function() {
    this.set('isEditing', true);
  },

  doneEditing: function() {
    this.set('isEditing', false);
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).fromNow();
});

var posts = [{
  id: '1',
  title: 'Ember Ember Ember',
  author: { name: "James" },
  date: new Date('11-10-2013'),
  excerpt: 'Ember is cool',
  body: 'I want to use ember with rails'
}, {
  id: '2',
  title: 'Rails is Cooler',
  author: { name: "James" },
  date: new Date('11-17-2013'),
  excerpt: 'This is a test post about rails',
  body: 'They can coexist side by side if they wanted to but they choose to destroy each other'
}];
