import { client } from '../db.ts';

export interface Params {
  id?: string | number;
}
export async function search(params: Params = {}) {
  const isSpecific = Object.keys(params).length !== 0;

  if (isSpecific) {
    return await client.execute('SELECT * FROM users WHERE id = ?', [params.id])
  } else {
    return await client.execute('SELECT * FROM users');
  }
}

export interface InsertParams {
  name: string;
  country: string;
}
export async function insert({ name, country }: InsertParams) {
  return await client.execute(
    'INSERT INTO users (name, country) VALUES (?, ?)',
    [name, country]
  );
}

export async function remove({ id }: Params) {
  return await client.execute('DELETE FROM users WHERE id = ?', [id]);
}

export interface UpdateParams extends Params {
  name: string;
  country: string;
}
export async function update({ id, name, country }: UpdateParams) {
  return await client.execute(
    'UPDATE users SET name = ?, country = ? WHERE id = ?',
    [name, country, id]
  );
}