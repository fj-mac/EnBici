var express = require("express");
var router = express.Router();
const path=require("path");
const app = express();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();
const bcrypt=require("bcrypt");



const usuarios=[];
let actual="No hay nada";


router.post("/loginUsuario", async (req, res) => {
  console.log("Entra a loginusuario");
  try{
    console.log("Entra al try", req.body);
    const user=usuarios.find(persona => persona.name == req.body.user);
    if(user==null)
    {
      console.log("este es el json");
      console.log(JSON.stringify(req.body));
      console.log("No se pudo encontrar el usuario. El usuario ingresado fue: "+req.body.user+ " la clave ingresada fue: "+req.body.password);

      return res.send("No hay un usuario");
    }
    if(await bcrypt.compare(req.body.password, user.password)){
      actual=JSON.stringify({
        actual:""+req.body.user
      });
      console.log(actual);
      res.redirect("/#");
    }
    else{

      res.redirect("/loginAgain");
    }
  }
  catch(error){
    res.status(500).send(error);
  }

});

router.get("/users", (req, res) => {
  res.json(usuarios);
});

router.post("/upDatePaseo", function(req,res,next) {
  myMongoLib.upDatePaseo(req.body);
});


router.get("/logout", (req, res) => {
  actual=JSON.stringify({
    actual:"No hay usuario"
  });
  console.log("ojo aca es"+ actual);
  res.redirect("/login");
});

router.get("/actual", (req, res) => {
  res.json(actual);
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
    console.log("Entra al try", req.body.password[0]);

    const hashedPassword=await bcrypt.hash(req.body.password[0], 10);
    console.log(hashedPassword);
    const user={name: req.body.user, password: hashedPassword};
    usuarios.push(user);
    res.redirect("/login");
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
  res.redirect("/grupos");

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


router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/build/index.html"));
});


module.exports = router;
