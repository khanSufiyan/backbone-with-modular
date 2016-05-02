define([
  'underscore',
  'backbone',
  'models/UserListModel'
], function(_, Backbone,UserListModel){
  
  var Users = Backbone.Collection.extend({
    model: UserListModel,
    url:'https://api.github.com/users'

      });

  return Users;

});