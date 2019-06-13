var mongoose = require("mongoose");
var Campground = require("./models/campground");

var data = [
        {
            name:"Cloud's Rest", 
            image:"Isso é uma imagem",
            description:"Bla bla bla"
        },
         {
            name:"Cloud's fire", 
            image:"Isso é uma imagem",
            description:"Bla bla bla"
        },
         {
            name:"Cloud's water", 
            image:"Isso é uma imagem",
            description:"Bla bla bla"
        }
    ];

function seedDB(){
        //remove all campgrounds
        Campground.remove({}, function(err){
        if(err){
            console.log(err)
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
  
              data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    }else {
                        console.log("Added a campgrounds!");
                        //create a comment
                        Comment.create(
                            {
                                text:"This place is great, ut I wish there was internet",
                                author:"Homer"
                            },function(err, comment){
                                if(err){
                                    console.log(err)
                                }else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment");
                                    
                                }
                                
                            });
                    }
            });
            
        });
    
    });
    
    //add a fe a comments
}

    

module.exports = seedDB;
