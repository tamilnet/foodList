/**
 * @openapi
 * components:
 *   schemas:
 *     Food:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the food.
 *         name:
 *           type: string
 *           description: The name of your food.
 *       example:
 *         name: Idly
 *
 * tags:
 *   name: Food
 *   description: API to manage your food.
 */

const express= require("express");
// const app = express()
const router = express.Router();

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

/**
 * @openapi
 * /:
 *   get:
 *     description: Get all food
 *     tags: [Food]
 *     responses:
 *       200:
 *         description: Returns list of food.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Food' 
 */
router.get("/", function(req, res){
  res.send(food);
});


/**
 * @openapi
 * /{foodId}:
 *   get:
 *     description: Get food by ID
 *     tags: [Food]
 *     parameters:
 *       - in: path
 *         name: foodId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The food id* 
 *     responses:
 *       200:
 *         description: Returns a food.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Food' 
 */
router.get("/:foodId", function(req, res){
  let foodById;
  for (let index = 0; index < food.length; index++) {
    const element = food[index];
    console.log(element.id);
    console.log(element.name);
    if (element.id == req.params.foodId) {
      foodById = element;
    }  
  }

  if (foodById) {
    res.send(foodById);
  } else {
    res.send("Not Matching.");
  }

});

module.exports = router;