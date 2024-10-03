import express, { Request, Response } from "express";
import { users } from "./data/users";
import cors from "cors";
// import { createServer, IncomingMessage, ServerResponse } from "http";
// import fs from "fs";
// import { z } from "zod";
import bcrypt from "bcrypt";
import { User, Task } from "./types/types";

// const { createServer } = require("node:http");

const app = express();
const port = 3001;

// const usersFile = "./data/users.json"; // här sparas filerna

// const readUsersFromFile = (): User[] => {
//   try {
//     const data = fs.readFileSync(usersFile, "utf-8");
//     return JSON.parse(data) as User[];
//   } catch (error) {
//     console.error("Error reading users file:", error);
//     return [];
//   }
// };

// const writeUsersToFile = (users: User[]): void => {
//   try {
//     fs.writeFileSync(usersFile, JSON.stringify(users, null, 2), "utf-8");
//   } catch (error) {
//     console.error("Error writing users file:", error);
//   }
// };

// middleware
app.use(express.json());
app.use(cors());

// GET - alla användare
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

// GET - alla användare
app.get("/users", (req: Request, res: Response) => {
  res.json(users);
  // res.status(200).json(users);
});

// login
app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  // res.status(200).json(users);

  const user = users.find((u) => u.email === email);

  if (user) {
    const isMatch = bcrypt.compareSync(password, user.passwordHash);
    if (isMatch) {
      res.json({ success: true, user: { name: user.name, email: user.email } });
    } else {
      res.status(401).json({ success: false, message: "Wrong password" });
    }
  } else {
    res.status(404).json({ success: false, message: "User not found" });
  }
});

app.get("/users/:id/checklist", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user.tasks);
  } else {
    res.status(404).send("User not found");
  }
});

// POST - uppdatera checklistan för en specifik användare
app.post("/users/:id/checklist", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const updatedTasks: Task[] = req.body.tasks;
  const user = users.find((u) => u.id === userId);

  if (user) {
    user.tasks = updatedTasks;
    res.status(200).json(user.tasks);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// eventuell förbättring - lägg till zod
