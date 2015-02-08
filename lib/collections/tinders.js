Tinders = new Mongo.Collection("tinders");

Meteor.methods({
	createTinder: function (name, description) {
		var result = Tinders.insert({
			name: name,
			description: description,
			createdAt: new Date(),
			createdBy: Meteor.userId()
		});
		return result != null;
	}
});