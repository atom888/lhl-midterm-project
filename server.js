const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

// Middleware //
app.use(express.static("public"));

app.set("view engine", "ejs");
// Routes //


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/confirm-order", (req, res) => {
  console.log("confirm-order!");

  res.render('render Confirmation ejs page')

});


app.get("/menu", (req, res) => {
  console.log("Testing button");

  res.render('menu');
});

app.get("/current-orders", (req, res) => {
  res.render("");
});


app.post("/sendOrder", (req, res) => {
  client.messages.create({
        to: twiliosettings.phone,
        from: twiliosettings.twiliophone,
        body: "Your order will be ready in 5 minutes!"
    }, function(err, message) {
        console.log(message);
    });


  res.redirect("")
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
