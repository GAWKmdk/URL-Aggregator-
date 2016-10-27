Websites = new Mongo.Collection("websites");


Websites.allow({
    
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
})


///easy search
WebpagesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['title', 'description','tag'],
  engine: new EasySearch.Minimongo({
  	sort: function () {
      return { up: -1, createdOn:-1 };
    }
  })
});




Comments = new Mongo.Collection("comments");

Comments.allow({
    
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
})
