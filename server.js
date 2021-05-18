const express = requir("express");

const app = express();

app.get("/", function(req,res){
  res.send("<h1>hello world</h1>");
});

app.listen(2000, function(){
  console.log("server has started on port 3000");
});
