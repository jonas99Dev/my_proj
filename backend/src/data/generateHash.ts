// generateHash.ts

import bcrypt from "bcrypt";

const generateHashedPassword = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(`Hashed password for '${password}': ${hashedPassword}`);
};

// Ändra lösenordet du vill hasha här
generateHashedPassword("password");
