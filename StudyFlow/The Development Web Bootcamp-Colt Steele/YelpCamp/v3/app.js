var express        = require("express");
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    Campground     = require("./models/campground"),
    seedDB         = require ("./seeds");
    
    
seedDB();
//cria e conecta ao bando de dados
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");




// Campground.create(
//     {
//     name:"Granite Hill",
//     image:"https://farm9.staticflickr.com/8456/7930250088_489b2a6c07.jpg",
//     description:"This a huge granite hill, no bathrooms. No water"
//     },function(err,campground){
//      if(err){
//          console.log(err);
//      }else{
//          console.log("NEWLY CRETED CAMPGROUND");
//          console.log(campground);
//      }  
//     }
// );





app.get("/",function(req,res){
    res.render("landing");
});
//INDEX -Show all campgrounds
app.get("/campgrounds", function(req,res){
    
    //Get all campgrounds from DB
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index",{campgrounds:allCampgrounds});
        }
        
    });
        
});

//CREATE 
app.post("/campgrounds", function(req, res){
    //get data from forman add to camground array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name:name,image:image, description:desc}
    //create a new campground and save in db
    Campground.create(newCampground, function(err,newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
        
    });
    
    
    //redirect back to campground pagete
});

//NEW- show form to create new campgrounds
app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs") 
});

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provide ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp has Started");
});