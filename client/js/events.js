//toggle visible state

Template.website_form.events({
		"click .js-toggle-website-form":function(event){
			$("#website_form").slideToggle('slow');
		}, 
		"submit .js-save-website-form":function(event){

			
			var url = event.target.url.value;
            var imageurl = event.target.imageurl.value;
			var title = event.target.title.value;
			var description = event.target.description.value;
            var tagArray = [];
            var tag = event.target.tag.value;
            var tagArray = tag.split(',');
            
			console.log("url: "+url +"imageurl:"+imageurl +"title"+title +"description"+description +"tag:"+tagArray);

			if (Meteor.user()){
			 Websites.insert({
	    		title:title, 
	    		url:url, 
                imageurl:imageurl,
	    		description:description,
                tag:tagArray,
	    		createdOn:new Date(),
	    		createdBy:Meteor.user().username, 
                up: 0,
                down: 0
    		});
    		$(".success-add").html("Successfully added a new website resource !");	
    		$('.js-save-website-form').closest('form').find("input[type=text]").val("");
            $("#website_form").slideToggle('slow');    
			}
            
            else {
                
               alert('You need to be logged in to submit websites!');   
            }
			return false;// stop the form submit from reloading the page

		}               

});


//comment state

Template.comment_form.events({
    "submit .js-save-comment-form":function(event){

        var comment = event.target.comment.value;
            console.log("The comment they entered is: "+comment);
        
		if (Meteor.user()){
			 Comments.insert({
	    		website: Router.current().params._id, 
                comment: comment, 	
	    		createdOn:new Date(),
	    		createdBy:Meteor.user().username
    			});	
			 $(".js-logcomment").html("comment added successfully");
			 $(".js-logcomment").css("color","green");
			 $('#comment').closest('form').find("input[type=text]").val("");
			}
			else {
				alert('You need to be logged in to submit comment !');  
			}

		return false;// stop the form submit from reloading the page
		
	}

});


//search by clicking any tag 
Template.website_item.events({
    
    "click .tag_return": function(event){
        
            //FIXED so TAGs ARE searchable - NAME is defined value not _ID or currentTarget
            var tagids = event.target.name; 
        
            console.log("search tag = "+ tagids);
        
            WebpagesIndex.getComponentMethods().search(tagids);
}        
});

//vote sorting
Template.ApplicationLayout.events({
    "click .js-upvote":function(event){
        // event.preventDefault(); 
        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        console.log("Up voting website with id "+website_id);

        // put the code in here to add a vote to a website!
        Websites.update({_id: website_id},
                        {$set: {up: this.up + 1}});

        return false;// prevent the button from reloading the page
    }, 
    "click .js-downvote":function(event){
        //event.preventDefault(); 
        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        console.log("Down voting website with id "+website_id);

        // put the code in here to remove a vote from a website!
        Websites.update({_id: website_id},
                        {$set: {down: this.down + 1}});

        return false;// prevent the button from reloading the page
    }
})
