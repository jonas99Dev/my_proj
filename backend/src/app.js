"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { createServer, IncomingMessage, ServerResponse } from "http";
// import { users } from "./data/users";
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// const { createServer } = require("node:http");
const app = (0, express_1.default)();
const port = 3001;
const usersFile = "./data/users.json"; // här sparas filerna
const readUsersFromFile = () => {
    try {
        const data = fs_1.default.readFileSync(usersFile, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        console.error("Error reading users file:", error);
        return [];
    }
};
const writeUsersToFile = (users) => {
    try {
        fs_1.default.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf-8");
    }
    catch (error) {
        console.error("Error writing users file:", error);
    }
};
// middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// GET - alla användare
app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});
// GET - alla användare
app.get("/users", (req, res) => {
    const users = readUsersFromFile();
    res.json(users);
    // res.status(200).json(users);
});
// login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const users = readUsersFromFile();
    // res.status(200).json(users);
    const user = users.find((u) => u.email === email);
    if (user) {
        const isMatch = bcrypt_1.default.compareSync(password, user.passwordHash);
        if (isMatch) {
            res.json({ success: true, user: { name: user.name, email: user.email } });
        }
        else {
            res.status(401).json({ success: false, message: "Wrong password" });
        }
    }
    else {
        res.status(404).json({ success: false, message: "User not found" });
    }
});
app.get("/users/:id/checklist", (req, res) => {
    const userId = parseInt(req.params.id);
    const users = readUsersFromFile();
    const user = users.find((u) => u.id === userId);
    if (user) {
        res.json(user.tasks);
    }
    else {
        res.status(404).send("User not found");
    }
});
// POST - uppdatera checklistan för en specifik användare
app.post("/users/:id/checklist", (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedTasks = req.body.tasks;
    const users = readUsersFromFile();
    const user = users.find((u) => u.id === userId);
    if (user) {
        user.tasks = updatedTasks;
        writeUsersToFile(users); // skriv tillbaka efter uppdatering
        res.status(200).json(user.tasks);
    }
    else {
        res.status(404).send("User not found");
    }
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
// eventuell förbättring - lägg till zod
