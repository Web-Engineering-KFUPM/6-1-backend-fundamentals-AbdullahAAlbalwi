// TODO 1: Import Express
import express from "express";



// TODO 2: Create the Express app and store it in a variable named app
const app = express();



// TODO 3: Allow React to access the server
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});



// TODO 5: Create the home route "/"
app.get("/", (req, res) => {
  res.send("Welcome to the home page");
});



// TODO 6: Create the "/about" route
app.get("/about", (req, res) => {
  res.send("This is the about page");
});



// TODO 7: Create the "/student" route
app.get("/student", (req, res) => {
  res.json({
    name: "Aisha",
    major: "Computer Science",
  });
});


// TODO 4: Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
