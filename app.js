const express= require("express")
const bodyParser=require("body-parser")
const date=require(__dirname+"/date.js")

const app=express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs')
app.use(express.static("public"))

let items=["Buy Food", "Cook food", "Eat food"];
let workList=[];

//const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.get("/",function(req,res){
    let day=date.getDay();
    res.render("list", {listTitle: day, newListItems: items})
})

app.post("/",function(req,res){

    let item=req.body.newItem;

    if(req.body.list==="Work"){
        workList.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/")
    }
    console.log(req.body.newItem)
})

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", newListItems: workList})
})

app.get("/about",function(req,res){
    res.render("about")
})

app.post("/about",function(req,res){
    res.redirect("/about")
})


app.listen(3000,function(){
    console.log("Server is running on port 3000")
})