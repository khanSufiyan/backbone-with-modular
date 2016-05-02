define([
  'underscore',
  'backbone'
], function(_, Backbone){
  
  var Repos = Backbone.Collection.extend({
		initialize: function(models, options)
			{
			  this.url ='https://api.github.com/users/'+ options.id +'/repos';
			},
	    });

  return Repos;

});