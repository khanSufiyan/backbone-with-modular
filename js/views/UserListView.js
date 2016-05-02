define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'collections/UserListCollection',
  'text!templates/userListTemplate.html'

  
], function($, _, Backbone,Handelbars,Users,userListTemplate){
  
  var UserList = Backbone.View.extend({
      el:'.page',
       render:function(){
        var that = this;
          var users = new Users();
          users.fetch({
          success:function(users){
          
          var template = _.template(userListTemplate,{users:users.models});
          that.$el.html(template);
         

          }
        });
        }
      })
      

  return UserList;

});
