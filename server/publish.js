//basic publish
Meteor.publish('websites',function(){
    return Websites.find({}, {
          sort: {createdOn: -1}});
});

Meteor.publish('comments',function(){
    return Comments.find({}, {
          sort: {createdOn: -1}});
});