var UserList = Backbone.View.extend({
      el:'.page',
        render:function(){
        var that = this;
          var users = new Users();
          users.fetch({
          success:function(users){

        var source = $('#user-list-template').html();
        var template = Handlebars.compile(source);
        var html = template(users.toJSON());
          
          /*var template = _.template($('#user-list-template').html(),{users:users.models});*/
          
          that.$el.html(html);
          }
        });
        }
      });