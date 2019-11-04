var express = require("express");
var router = express.Router();
const path=require("path");
const app = express();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();
const bcrypt=require("bcrypt");



const usuarios=[];



router.post("/loginUsuario", async (req, res) => {
  console.log("Entra a loginusuario");
	try{
    console.log("Entra al try", req.body);
		const user=usuarios.find(persona => persona.name == req.body.user);
		if(user==null)
		{
			console.log("este es el json");
			console.log(JSON.stringify(req.body));
			console.log("No se pudo encontrar el usuario. El usuario ingresado fue: "+req.body.user+ " la clave ingresada fue: "+req.body.password)

      return res.status(407).send();
    }
		if(await bcrypt.compare(req.body.password, user.password)){
			res.send("Se ha iniciado exitosamente");
			console.log(req);
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
  res.json(usuarios);
});

router.post("/users", async (req, res) => {
	console.log("Entra en users ", req.body);

	const user=usuarios.find(persona => persona.name == req.body.user);
	console.log("User: ", user);
		if(user!=null)
		{
			return res.status(400).send("Ya existe ese usuario");
		}
	try{
		if(req.body.password[0] != req.body.password[1])
		{
			return res.status(400).send("Las contraseñas no coinciden");
		}
		console.log("Entra al try", req.body.password[0]);

		const hashedPassword=await bcrypt.hash(req.body.password[0], 10);
		console.log(hashedPassword);
		const user={name: req.body.user, password: hashedPassword};
		usuarios.push(user);
		res.status(201).send();
		res.redirect("/");
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
