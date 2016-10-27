
// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
			return Websites.find({}, {sort:{up: -1, createdOn:-1}});
		}
});

//helper function that returns avaliable comment by website ID

Template.comments_list.helpers({
    comments:function(){
			
        return Comments.find({website: Router.current().params._id}, {sort:{createdOn:1}});
			
}
});

/// Convert user_id to User 
	Template.comment_item.helpers({
		getUser:function(user_id){
		  var user = Meteor.users.findOne({_id:user_id});
		  if (Meteor.user()){
              //change this for accounts
              //return users.username;
		    return "Admin";
		  }
		  else {
		    return "Anonymous";
		  }
		}
});


/////
Template.searchBox.helpers({
  WebpagesIndex: () => WebpagesIndex
});


// format the date if you use momentjs packages **not installed because of some npm deprecations 
Template.registerHelper('formattedDate', function() {
     return moment(this.createdOn).format("MM/DD/YYYY");  // or whatever format you prefer
});

// helper function that returns the username for a given user ID
Template.registerHelper('getUser', function(userId) {
     var user = Meteor.users.findOne({_id: userId});
    if (Meteor.user()) {
        //change this for accounts
        //return users.username;
        return "Admin";
    }
    else {
        return "Anonymous";
    }
});