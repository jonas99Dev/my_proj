import express, { Request, Response } from "express";
import { users } from "./data/users"; // Din users array
import cors from "cors";
// import { loginData } from "./data/loginData"; // Simulerad login-data
// import { User } from "./types/types"; // Typ för User
import bcrypt from "bcrypt";

// Funktion för att validera lösenord
const validatePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Express-applikation
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({ origin: `http://localhost:3000` }));

// GET - alla användare
app.get("/users", (req: Request, res: Response) => {
  // Kontrollera att lastLogin finns för varje användare
  console.log("Sending users:", users);
  res.json(users);
});

app.get("/users/:id", (req: express.Request, res: express.Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    console.log(`User with ID ${userId} not found`);
    res.status(404).json({ message: "User not found" });
  }

  console.log(`User with ID ${userId} found:`, user);
  res.json(user);
});

// POST - login
app.post("/login", async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user = users.find((u) => u.name.toLowerCase() === name.toLowerCase());

  if (user) {
    const isMatch = await validatePassword(password, user.passwordHash);
    if (isMatch) {
      user.lastLogin = new Date().toISOString(); // Uppdatera senaste inloggningen
      console.log(`Updated last login for ${user.name}: ${user.lastLogin}`);

      res.json({
        success: true,
        role: user.role,
        user: { name: user.name, lastLogin: user.lastLogin },
      });
    } else {
      res.status(401).json({ success: false, message: "Wrong password" });
    }
  } else {
    res.status(404).json({ success: false, message: "User not found" });
  }
});

// POST - lägga till fråga
app.post("/users/:id/questions", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  const newQuestion = {
    id: Date.now(), // Unikt ID för frågan
    question: req.body.question,
    answer: null, // Ingen svar ännu
    userId: userId,
  };

  user!.questions.push(newQuestion); // Lägg till frågan till användarens frågor

  res.json(newQuestion); // Returnera den nya frågan
});

// POST - svara på fråga
app.post(
  "/users/:userId/questions/:questionId/answer",
  (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    const questionId = parseInt(req.params.questionId);
    const { answer } = req.body;

    const user = users.find((u) => u.id === userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const question = user!.questions.find((q) => q.id === questionId);
    if (!question) {
      res.status(404).json({ message: "Question not found" });
    }

    question!.answer = answer; // Uppdatera frågan med svaret

    res.json({ success: true, answer }); // Returnera svaret som skickades
  }
);

// POST - hantera svar från manager
app.post(
  "/users/:userId/questions/:questionId/answer",
  (req: Request, res: Response) => {
    const { userId, questionId } = req.params;
    const { answer } = req.body;

    // Hitta användaren
    const user = users.find((u) => u.id === parseInt(userId));
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    // Hitta frågan
    const question = user!.questions.find((q) => q.id === parseInt(questionId));

    if (!question) {
      res.status(404).json({ message: "Question not found" });
    }

    // Uppdatera svaret på frågan
    question!.answer = answer;

    res.json({ success: true, answer });
  }
);

// lägg till ny uppgift för användare
app.post("/users/:id/tasks", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body; // ny uppgifts namn

  // Hitta användaren
  const user = users.find((u) => u.id === userId);

  if (!user) {
    res.status(404).json({ message: " User not found" });
  }

  const newTask = { name, completed: false };

  user?.tasks.push(newTask);

  res.status(201).json(newTask);
});

// Servern lyssnar på angiven port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
