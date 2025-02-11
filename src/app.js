// const express = require("express");
import express from "express";

// Create a new express application and export it using module.exports. Use the express() function to do so.
// this function returns an instance of an Express application.
const app = express();

app.get("/test/2", (req, res) => {
    const routePath = req.path; // Retrieves the route path
    const fullUrl = req.originalUrl; // Retrieves the full URL including query string
    res.send(`Route Path: ${routePath}, Full URL: ${fullUrl}`);
});

app.get("/test", (req, res) => {
  res.send("Hello from test route.");
});

app.get("/", function (req, res) {
  res.send("Hello from root route.");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
