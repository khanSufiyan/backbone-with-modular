// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/UserListView',
  'views/RepoListView'

  
], function($, _, Backbone,UserList,ViewRepo) {
  
 var Router = Backbone.Router.extend({
        routes:{
        '': 'home',
        'repo/:id':'viewRepo'
        }
      });
  
  var initialize = function(){
    var router = new Router();
   
    
      router.on('route:home',function(){
      var userList = new UserList();
      userList.render();
      });
      
      router.on('route:viewRepo',function(id){
      var viewRepo = new ViewRepo();
      viewRepo.render(id);
      });

  

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
