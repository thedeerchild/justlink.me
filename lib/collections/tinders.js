Tinders = new Mongo.Collection("tinders");

Meteor.methods({
	createTinder: function (name, description) {
		var result = Tinders.insert({
			name: name,
			description: description,
			createdAt: new Date(),
			createdBy: Meteor.userId()
		});
		console.log("???" + result);
		console.log('bool: ' + result != null);
		return result != null;
	}
});