import { Response } from "https://deno.land/x/oak@v12.6.0/mod.ts";

export function welcome(context: { response: Response }) {
  const { response } = context;
  response.body = "Welcome to my API!";
}