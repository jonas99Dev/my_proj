import { User } from "../types/types"; // Importera typerna från types.ts

export const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@user.com",
    passwordHash: "$2b$10$hashedPasswordAlice123", // Lägger till passwordHash
    company: "Company A",
    role: "user",
    courses: [
      { courseName: "Course 1", completed: true },
      { courseName: "Course 2", completed: false },
      { courseName: "Course 3", completed: true },
      { courseName: "Course 4", completed: false },
      { courseName: "Course 5", completed: true },
      { courseName: "Course 6", completed: true },
    ],
    tasks: [
      { name: "Uppgift 1", completed: true },
      { name: "Uppgift 2", completed: false },
      { name: "Uppgift 3", completed: true },
    ],
    questions: [],
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@user.com",
    passwordHash: "$2b$10$hashedPasswordBob456", // Lägger till passwordHash
    company: "Company B",
    role: "user",
    courses: [
      { courseName: "Course 1", completed: false },
      { courseName: "Course 2", completed: true },
      { courseName: "Course 3", completed: false },
    ],
    tasks: [
      { name: "Uppgift 1", completed: true },
      { name: "Uppgift 2", completed: true },
      { name: "Uppgift 3", completed: false },
    ],
    questions: [],
  },

  {
    id: 3,
    name: "Charlie",
    email: "charlie@user.com",
    passwordHash:
      "$2b$10$TgrQoa0RgIIIAnQX8z6j.O5rnHok9roYZ38J3lv1v9.NUhvKM83qC", // Lägger till passwordHash
    company: "Company C",
    role: "user",
    courses: [
      { courseName: "Course 1", completed: true },
      { courseName: "Course 2", completed: true },
      { courseName: "Course 3", completed: false },
    ],
    tasks: [
      { name: "Uppgift 1", completed: false },
      { name: "Uppgift 2", completed: false },
      { name: "Uppgift 3", completed: true },
    ],
    questions: [],
  },
  {
    id: 4,
    name: "Julia",
    email: "julia@user.com",
    passwordHash:
      "$2b$10$.7NYd5zMKNOOzGH49gIcD.KjO7DImTw22tGl9ZUYWdvSrAwzINZ5u", // Lägger till passwordHash
    company: "Company C",
    role: "user",
    courses: [
      { courseName: "Course 1", completed: true },
      { courseName: "Course 2", completed: true },
      { courseName: "Course 3", completed: false },
    ],
    tasks: [
      { name: "Uppgift 1", completed: false },
      { name: "Uppgift 2", completed: false },
      { name: "Uppgift 3", completed: true },
    ],
    questions: [],
  },
  {
    id: 5,
    name: "Jonas",
    email: "jonas@user.com",
    passwordHash:
      "$2b$10$uneSi.g6v43a17GUIoqaK.YOitIF7BSpyqxJBZrNXsM86Y/yXbV6W", // Lägger till passwordHash
    company: "Company C",
    role: "manager",
    courses: [
      { courseName: "Course 1", completed: true },
      { courseName: "Course 2", completed: true },
      { courseName: "Course 3", completed: false },
    ],
    tasks: [
      { name: "Uppgift 1", completed: false },
      { name: "Uppgift 2", completed: false },
      { name: "Uppgift 3", completed: true },
    ],
    questions: [],
  },
];
