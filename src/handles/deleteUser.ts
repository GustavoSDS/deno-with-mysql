import { remove } from "../repository/users.ts";
import * as doesUserExist from "../libs/doesUsesExists.ts";

export async function deleteUser({ params, response }: any) {
  const userId = params.id;
  const userExists = await doesUserExist.exists(userId);
  if (userExists) {
    const res = await remove({ id: userId });
    response.status = 200;
    response.body = {
      success: true,
      msg: `User ${userId} deleted`,
      data: res
    };
  } else {
    response.status = 404;
    response.body = { msg: `User ${userId} not found` };
    return;
  }
}
