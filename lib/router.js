Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'home'
});

Router.route('/create/', {
  name: 'create',
  onBeforeAction: function() {
  	if (!Meteor.user() && !Meteor.loggingIn()) {
  		this.render('signupLogin');
  	} else {
  		this.next();
  	}
  }
});

Router.route('/you/', {
	name: 'signupLogin'
});

