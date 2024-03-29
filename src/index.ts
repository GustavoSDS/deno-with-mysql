import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import router from "./routes.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
console.log(`Server running on port ${port}`);
await app.listen({ port });