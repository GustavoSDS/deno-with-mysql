import { insert } from "../repository/users.ts";

export async function createUser({ request, response }: any) {
  try {
    const body = await request.body();
    const user = await body.value;
    const { name, country } = user;
    const valType = typeof name === "string" && typeof country === "string";
    if (name && country && valType) {
      await insert(user);

      response.status = 201;
      response.body = {
        success: true,
        data: user,
      };
      return;
    }
    response.status = 400;
    response.body = {
      success: false,
      message: "User name and country are required. Shoud type of string",
    };
  } catch (error) {
    console.log(error);
  }
}
