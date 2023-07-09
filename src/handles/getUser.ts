import { search } from "../repository/users.ts";
import * as doesUserExist from "../libs/doesUsesExists.ts";

export async function getUser({ response, params }: any) {
  const userExists = await doesUserExist.exists(params.id)
  if (userExists) {
    const user = await search(params)
    response.status = 200
    response.body = {
      data: user.rows,
      success: true,
      message: `User ${params.id} found`
    }

  } else {
    response.status = 404
    response.body = {
      message: "User not found"
    }
    return;
  }


}