const express = require("express");
const path = require("path");
const hbs = require("hbs");

//app config
const app = express();
const port = process.env.PORT || 5000;

//paths of websites
const dynamicPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
const StaticPath = path.join(__dirname, "../public");

//------middleWares-------//

app.set("view engine", "hbs");
app.set("views", dynamicPath);
hbs.registerPartials(partialPath);

app.use(express.static(StaticPath));

//------DB CONFIG-------////
// databse part will be shown here

//------API ROUTES-------//
app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error");
});

//listener
app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
