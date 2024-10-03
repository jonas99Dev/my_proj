import fs from "fs";
import path from "path";
import { users } from "./data/users";

// Var ska filen sparas
const outputPath = path.join(__dirname, "data", "users.json");

// Kontrollera om mappen "data" finns, om inte, skapa den
if (!fs.existsSync(path.join(__dirname, "data"))) {
  fs.mkdirSync(path.join(__dirname, "data"));
}

// skriva data till users.json
fs.writeFile(outputPath, JSON.stringify(users, null, 2), (err) => {
  if (err) {
    console.error("Error writing to users.json", err);
  } else {
    console.log("users.json has been generated successfully.");
  }
});
