const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

// Endpoint to handle form submission
app.post("/addData", (req, res) => {
  const newData = req.body;

  // Read existing data from JSON file
  const existingData = JSON.parse(fs.readFileSync("./db/gear.json"));

  // Append new data
  existingData.push(newData);

  // Write updated data back to JSON file
  fs.writeFileSync("./db/gear.json", JSON.stringify(existingData, null, 2));

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
