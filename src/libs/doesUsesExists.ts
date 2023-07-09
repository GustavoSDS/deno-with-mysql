import { client } from '../db.ts';

export async function exists(id: Number | string): Promise<boolean> {
  const result: any = await client.execute('SELECT * FROM users WHERE id = ?', [id])
  return result.rows.length > 0;
}