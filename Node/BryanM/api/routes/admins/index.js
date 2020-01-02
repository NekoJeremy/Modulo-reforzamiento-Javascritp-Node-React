const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const Router = require("restify-router").Router;
const router = new Router();
const adminSchema = new Schema({
  username: String,
  password: String
});

const adminModel = mongoose.model("admins", adminSchema);

//Devuelve a todos los admins
router.get("/v1/admins", async (request, response) => {
  await adminModel.find({}, function(err, result) {
    if (err) console.log(err);
    console.log("admins", result);
    response.send(result);
  });
});

router.post("/v1/admins", async (request, response) => {
  const { Username, Password } = request.body;
  await adminModel.find({ Username, Password }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length === 0) {
        response.send(401, "Recurso no encontrado");
      } else {
        response.send(200, "Recurso encontrado");
        console.log(result);
      }
    }
  });
});

module.exports = router;
