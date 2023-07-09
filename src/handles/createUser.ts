import { insert } from "../repository/users.ts";

export async function createUser({ request, response }: any) {
  try {
    const body = await request.body();
    const user = await body.value;
    
    if (user) {
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
      message: "No user created",
    };
  } catch (error) {
    console.log(error);
  }
}
