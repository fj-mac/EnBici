var express = require("express");
var router = express.Router();
const app = express();

const MyMongoLib = require("../MyMongoLib");
const myMongoLib = MyMongoLib();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

router.get("/data", (req, res) => {
	console.log("Get data");
	myMongoLib.getDocs()
	.then(docs => res.send(docs))
	.catch(err => res.send({err: true, msg: err}));
});


module.exports = router;
