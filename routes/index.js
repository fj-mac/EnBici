var express = require("express");
var router = express.Router();
const path=require("path");
const app = express();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();
const bcrypt=require("bcrypt");



const usuarios=[];



router.post("/login", async (req, res) => {

  try{
    const user=usuarios.find(persona => persona.name = req.body.name);
    if(user==null)
    {
      return res.status(400).send("No se pudo encontrar el usuario");
    }
    if(await bcrypt.compare(req.body.password, user.password)){
      res.send("Se ha iniciado exitosamente");
    }
    else{
      res.send("La contraseña es incorrecta");
    }
  }
  catch(error){
    res.status(500).send(error);
  }
});

router.get("/users", (req, res) => {
  res.json(usuarios)
});

router.post("/users", async (req, res) => {

	const user=usuarios.find(persona => persona.name == req.body.name);
		if(user!=null)
		{
			return res.status(400).send("Ya existe ese usuario");
		}
	try{
		const hashedPassword=await bcrypt.hash(req.body.password, 10);
		console.log(hashedPassword);
		const user={name: req.body.name, password: hashedPassword};
		usuarios.push(user);
		res.status(201).send();
	}
	catch (error){
		res.status(500).send(error);
	}
});

router.get("/data", (req, res) => {
  console.log("Get data");
  myMongoLib.getDocs()
  .then(docs => res.send(docs))
  .catch(err => res.send({err: true, msg: err}));
});

router.post("/crearPaseo", function(req,res,next) {

  console.log("crearProducto", req.body);
  crearPaseo(req.body);
    res.redirect("/");

});


function crearPaseo(content, callback){
  console.log("Entra a crearPaseo");
  myMongoLib.crearPaseo(content);

}

router.get("/paseos", (req, res) => {
  console.log("Get Paseos");
  myMongoLib.getPaseos()
  .then(docs => res.send(docs))
  .catch(err => res.send({err: true, msg: err}));
});



router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/front/build/index.html"));
});

module.exports = router;
