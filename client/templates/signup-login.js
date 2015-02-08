if (Meteor.isClient) {
	Template.signupLogin.events({
		"submit .logMeIn": function (event) {
			console.log(event);

			email = $(event.target).find('[name=email]').val();
			password = $(event.target).find('[name=password]').val();
			console.log(email);
			console.log(password);

			Accounts.createUser({"email": email, "password": password}, function(err) {
				console.log(err);
				console.log(err.error);
				if (!err) {
					Router.go('create');
				} else {
					if (err.error == 403) {
						console.log("Email already exists, validate password now");
						Meteor.loginWithPassword(email, password, function(err) {
							console.log(err);
							//console.log(err.error);
							if (!err) {
								// check where you're coming from
								Router.go('create');
							} else {
								alert(err.error + " - unique gibberish #1");
							}
						});
					}
				}
			});
			return false;
		}
	})
}