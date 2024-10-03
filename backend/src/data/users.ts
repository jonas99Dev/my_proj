import { User } from "../types/types"; // Importera typerna från types.ts

export const users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@user.com",
    passwordHash: "$2b$10$hashedPasswordAlice123", // Lägger till passwordHash

    company: "Company A",
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
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@user.com",
    passwordHash: "$2b$10$hashedPasswordBob456", // Lägger till passwordHash
    company: "Company B",
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
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@user.com",
    passwordHash: "$2b$10$hashedPasswordCharlie789", // Lägger till passwordHash
    company: "Company C",
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
  },
];
