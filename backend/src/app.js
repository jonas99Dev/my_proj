import express from "express";
// This is a simple Express server.
// Import the Express package
const express = require("express");
// Create an instance of an Express server
const app = express();
// Set the port number
const port = 8080;

// Define a route that returns a JSON object with a message when visiting the /hello endpoint
app.get("/hello", (req, res) => {
  res.status(200).json({ message: "World!" });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
