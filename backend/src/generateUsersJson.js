"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const users_1 = require("./data/users");
// Var ska filen sparas
const outputPath = path_1.default.join(__dirname, "data", "users.json");
// Kontrollera om mappen "data" finns, om inte, skapa den
if (!fs_1.default.existsSync(path_1.default.join(__dirname, "data"))) {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, "data"));
}
// skriva data till users.json
fs_1.default.writeFile(outputPath, JSON.stringify(users_1.users, null, 2), (err) => {
    if (err) {
        console.error("Error writing to users.json", err);
    }
    else {
        console.log("users.json has been generated successfully.");
    }
});
