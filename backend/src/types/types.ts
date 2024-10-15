export interface Task {
  name: string;
  completed: boolean;
}

export interface Question {
  id: number; // Unikt ID för varje fråga
  question: string; // Själva frågan
  answer: string | null; // Svaret, som kan vara null om inget svar har givits
  userId: number; // Referens till användaren som ställde frågan
}

export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  company: string;
  // user: string;
  role: string;
  courses: Course[];
  tasks: Task[];
  lastLogin?: string;
  questions: Question[];
}

export interface Course {
  courseName: string;
  completed: boolean;
}

// Byt namn på LoginDataType till LoginDataItem för klarhet
export interface LoginDataItem {
  name: string;
  passwordHash: string;
  role: string;
  manager: string;
  lastLogin?: string;
}

export interface LoginSimulatorProps {
  setLoggedIn: (value: boolean) => void;
  setLoggedInUser: (value: string) => void; // Lägg till detta
}
