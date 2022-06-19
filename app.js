const express= require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

const food=[
    {
      id: 1,
      name: "Idly"
    },
    {
      id: 2,
      name: "Dosa"
    },
    {
      id: 3,
      name: "Chappathi"
    },
    {
      id: 4,
      name: "Poori"
    },
    {
      id: 5,
      name: "Pongal"
    }
  ]

app.get("/api/food", function(req, res){
  
  res.send(food);
});


app.get("/api/food/:foodId", function(req, res){
  

  for (let index = 0; index < food.length; index++) {
    const element = food[index];
    console.log(element.id);
    console.log(element.name);
    if (element.id == req.params.foodId) {
      res.send(element);
    } else {
      res.send("Not Matching.");
    }
   
  }
  
});





app.listen(3000, function(){
  console.log("Server started running at port 3000.");
});