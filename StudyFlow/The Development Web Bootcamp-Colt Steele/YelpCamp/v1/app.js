var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")

var campgrounds =[
        {name:"Salmon Creek", image:"https://farm9.staticflickr.com/8456/8006869967_de2ed3e564.jpg"},
        {name:"Granite Hill", image:"https://farm9.staticflickr.com/8456/7930250088_489b2a6c07.jpg"},
        {name:"Mountain Goat's Rest", image:"https://farm4.staticflickr.com/3455/3753652218_266bca0b93.jpg"},
        {name:"Lagoamar", image:"https://farm2.staticflickr.com/1266/4701470104_07556d68d6.jpg"}
        
            
        ];


app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs") 
});

app.get("/campgrounds", function(req,res){
    
        res.render("campgrounds", {campgrounds:campgrounds});
})


app.post("/campgrounds",function(req,res){
  
    
    //get data from forman add to camground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name,image:image}
    campgrounds.push(newCampground);
    res.redirect("/campgrounds")
    
    //redirect back to campground pagete
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp has Started")
});