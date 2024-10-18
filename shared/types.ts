// types.ts

export interface User {
  id: number;
  name: string;
  email: string;
  company: string;
  courses: Course[];
  tasks?: Task[]; // Lägg till tasks om alla användare har uppgifter
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
}

export interface Task {
  name: string;
  completed: boolean;
}

// export interface LoginSimulatorProps {
//   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

// frontend/src/types/types.ts
export interface LoginSimulatorProps {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoggedInUser: React.Dispatch<React.SetStateAction<string>>; // Lägg till detta
}
