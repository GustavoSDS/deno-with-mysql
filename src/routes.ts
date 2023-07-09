import { Router} from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { getAllUsers } from "./handles/getAllUsers.ts";
import { getUser } from "./handles/getUser.ts";
import { createUser } from "./handles/createUser.ts";
import { updateUser } from "./handles/updateUser.ts";
import { deleteUser } from "./handles/deleteUser.ts";
import { welcome } from "./handles/home.ts";

const router = new Router();

router.get("/", welcome);

router.get("/users", getAllUsers);

router.get("/users/:id", getUser);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

export default router;
