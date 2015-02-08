if (Meteor.isClient) {
	Template.home.events({
		"click .create": function () {
			// route to create page
			console.log("route to create page");
			if (Meteor.userId()) {
				Router.go('create');
			} else {
				Router.go('signupLogin');
			}
		}
	});
}