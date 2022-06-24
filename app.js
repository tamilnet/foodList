const express= require("express");
const bodyParser = require("body-parser");
swaggerJsdoc = require("swagger-jsdoc"),
swaggerUi = require("swagger-ui-express");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));





const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Foodlist Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Foodlist",
        url: "https://foodlist.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/api/food",
      },
    ],
  },
  apis: ["./routes/food.js"],
};


app.use("/api/food", require("./routes/food"));

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


app.listen(process.env.PORT || 3000, function(){
  console.log("Server started running at port 3000.");
});