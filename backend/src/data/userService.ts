import bcrypt from "bcrypt";

// Antal saltomgångar för kryptering
const saltRounds = 10;

// Funktion för att kryptera lösenord
const encryptPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Använd krypteringsfunktionen när du sparar en ny användare
const newUser = {
  name: "John Doe",
  email: "john@example.com",
  passwordHash: await encryptPassword("plaintextPassword"),
};
