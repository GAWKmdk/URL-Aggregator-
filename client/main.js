import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './index.html';
import './style.css';


//Iron Router 


Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

//default render

Router.route('/', function () {
    
         
    this.render('navbar', {
        to: 'navbar' 
    });
    
    this.render('main', {
        to: 'main'
    });
    
    return Meteor.subscribe('websites');
      
});
    
Router.route('/website/:_id', function () {
  	this.render('navbar', {
    to:"navbar"
  	});
  		this.render('website', {
    	to:"main", 
    	data:function(){
            
      return Websites.findOne({_id:this.params._id});
    }
           
  	});
    this.render('comments_list', {
    to: 'comments'
});
this.render('comment_form', {
    to: 'comment'
});
    
    
    Meteor.subscribe('websites');
    Meteor.subscribe('comments');
});



