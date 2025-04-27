import * as bcrypt from 'bcrypt';
import { TransformFnParams } from 'class-transformer';

export async function hashPassword(param: TransformFnParams): Promise<string> {
  const hash = await bcrypt.hash(param.value, await bcrypt.genSalt(10));
  return hash;
}

async function comparePasswords(rawPassword: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(rawPassword, hashedPassword);
}
