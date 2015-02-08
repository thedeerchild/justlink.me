Template.create.events({
	"submit .create": function (event) {
		var theTinder = $(event.target).find('[name=tinder]').val();
		var description = $(event.target).find('[name=description]').val();
		Meteor.call("createTinder", theTinder, description, function(error, result) {
			if (result) {
				alert("It's running");
				Router.go('tinda');
			} else {
				alert("Fail.");
			}
		});
		return false;
	}
})