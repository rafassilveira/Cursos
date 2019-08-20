const express = require('express');
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rafaelssilveira:@Hardcore11@cluster0-se1sy.mongodb.net/test?retryWrites=true&w=majority',{
	useNewUrlParser:true,
	useCreateIndex:true
}).then(()=>{
	console.log("Connected to DB");
}).catch(err => {
	console.log('ERROR:', err.message);
});
app.get('/', (req,res) => {
	res.send('Is this thing on?');
});

app.listen(3000,() =>{
	console.log("teste 3000");
});