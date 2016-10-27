Study built from Joan Miras tutorial. 
http://joanmira.com/build-a-social-website-aggregator-using-meteor/

Made numerous updates, upgrades and enhancements from this tutorial.

1) Tutorial didn't have a working searchable list. This one uses the Easy Search module and it has been configured to filter by title, description and tags. I've also added general tags to any url post (though they are not encrypted) and if you select one it will filter all list results.
2) Tutorial didn't include any site images ... what good is a website list without pictures. You can now add URL links to the DB. 
3) Added webtempest:animate to make search and transitions less static and boring.
3) Started a basic account system ... but didn't add password verification,email or roles since essentially there is no spam-prevention mod. If you are not logged in then all comments are anonymous.
4) Built a framework in main.js for a carousel-type recommendation post with the parameters for how to recommended websites, but you need to setup multiple indexing filters with Easy Search, SEO optimize the db and create roles that can edit/monitor posts accordingly.
5) Got rid of momentJS and HTTP Gzip. They weren't really necessary except for getting around long-writing helpers for time formating and momentJS is outdated for most of the URL SEO-encryption so the compression/decompressing was creating flags more then removing them. 
6) Some minor bootstrap blueprinting and rewriting of snytax to make the code reusable and easier to digest based on general purpose naming conventions.


