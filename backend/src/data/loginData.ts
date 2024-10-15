import { LoginDataItem } from "../types/types"; // Ändrat typen här

export const loginData: LoginDataItem[] = [
  {
    name: "Jonas",
    passwordHash:
      "$2b$10$uneSi.g6v43a17GUIoqaK.YOitIF7BSpyqxJBZrNXsM86Y/yXbV6W",
    role: "manager",
    manager: "Jonas J",
  },
  {
    name: "John",
    passwordHash: "$2b$10$...hashedPasswordForJohn...",
    role: "manager",
    manager: "Sangeed",
  },
  {
    name: "Julia",
    passwordHash:
      "$2b$10$.7NYd5zMKNOOzGH49gIcD.KjO7DImTw22tGl9ZUYWdvSrAwzINZ5u",
    role: "user",
    manager: "Jonas J",
  },
  {
    name: "Josefine",
    passwordHash: "$2b$10$...hashedPasswordForJosefine...",
    role: "user",
    manager: "Sangeed",
  },
  {
    name: "Caroline",
    passwordHash: "$2b$10$...hashedPasswordForCaroline...",
    role: "user",
    manager: "Jonas",
  },
];
