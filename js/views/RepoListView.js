define([
  'jquery',
  'underscore',
  'backbone',
  'collections/RepoListCollection',
  'text!templates/repoListTemplate.html'

  
], function($, _, Backbone,Repos,repoListTemplate){
  
  var ViewRepo = Backbone.View.extend({
      el:'.page',
      
        render:function(id){
         var that = this;
          var repo = new Repos([], { id: id });
          repo.fetch({
          success:function(repo){
           var template = _.template(repoListTemplate,{repo:repo.models});
          that.$el.html(template);
        
            }
        
        });
          
       
       }
      }); 
      

  return ViewRepo;

});
