const exp = require("express");
const app = exp()

function test(req,res,next)

app.get("/products",function(req,res){
    res.send("Product page");
});

var port = process.env.PORT || 3000;
app.listen(port);