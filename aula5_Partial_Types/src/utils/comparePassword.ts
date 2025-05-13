import bcrypt from "bcrypt";

async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw error;
  }
}

export { comparePassword };
