import { search } from "../repository/users.ts";

export async function getAllUsers({ response }: any) {
  try {
    const data = await search();
    response.status = 200;
    response.body = {
      message: 'Users fetched successfully',
      data: data.rows,
    };
  } catch (error) { console.log(error) }
}