if (Meteor.isClient) {
  generateTinder = function(org) {
    Meteor.call('generateTinder', org)
  }
}

if (Meteor.isServer) {
  Meteor.methods({
    generateTinder: function(org) {
      var exec = Npm.require('child_process').exec; 
      var clone = Meteor.npmRequire("nodegit").Clone.clone;

      exec("cd ~/ && mkdir -p tmp && cd tmp", function(e, out, err) {
        console.log(e,out,err);

        clone("https://github.com/thedeerchild/taas.git", org, { ignoreCertErrors: 1 }).then(function(repo) {

          exec("cd " + org, function(e,out,err){
            console.log(e,out,err);
            exec("ls -a", function(e,out,err) {
              console.log(out);
            });
          });
          x
        }, function(err){
          console.log(err);
        });

      });
    }
  });
}