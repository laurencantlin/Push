const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
// const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));


// Send every request to the React app
// Define any API routes before this runs
// app.use(routes);
require("./routes/api/foodItems")(app);


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
