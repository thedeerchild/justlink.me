Template.create.events({
	"submit .create": function (event) {
		var theTinder = $(event.target).find('[name=tinder]').val();
		var description = $(event.target).find('[name=description]').val();
		Meteor.call("createTinder", theTinder, description, function(result) {
			if (result) {
				alert("You're good to go.");
				Router.go('home');
			} else {
				alert("Fail.");
			}
		});
		return false;
	}
})