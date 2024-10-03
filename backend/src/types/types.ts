// types.ts

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  company: string;
  courses: Course[];
  tasks: Task[]; // Lägg till tasks om alla användare har uppgifter
}

export interface Course {
  courseName: string;
  completed: boolean;
}

export interface Task {
  name: string;
  completed: boolean;
}
