import { update, InsertParams } from "../repository/users.ts";
import * as doesUserExist from "../libs/doesUsesExists.ts";

export async function updateUser({ request, response, params }: any) {
  const userExists = await doesUserExist.exists(params.id);

  if (userExists) {
    try {
      const body = request.body();
      const user: InsertParams = await body.value;
      const { id } = params;
      const { name, country } = user;
      const validate = name && country;
      const valType = typeof name === 'string' && typeof country === 'string';

      if (validate && valType) {
        const res = await update({ id, name, country });
        response.status = 200;
        response.body = {
          success: true,
          message: "User updated successfully",
          user: res,
        }
        return;
      }
      response.status = 400;
      response.body = {
        success: false,
        message: "Name and country are required. Name and country shoud type string",
        user: null,
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    response.status = 404;
    response.body = {
      message: "User not found",
    };
    return;
  }

}