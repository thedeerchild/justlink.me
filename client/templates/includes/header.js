if (Meteor.isClient) {
	Template.header.events({
		"click .logout": function () {
			Meteor.logout();
			Router.go('home');
		},
		"click .signupLogin": function () {
			Router.go('signupLogin');
		}
	});

	Template.header.helpers({
		activeRouteClass: function(/* route names */) {
    		var args = Array.prototype.slice.call(arguments, 0);
    		args.pop();
    
    		var active = _.any(args, function(name) {
      			return Router.current() && Router.current().route.getName() === name
    		});
    
    		return active && true;
  		}
	});
}