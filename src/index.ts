import { Hono } from "hono";
import { jwt } from "hono/jwt";

const app = new Hono();

app.get("/", (c) => c.text("Hello hono/bun!"));

app.use(
  "/auth/*",
  jwt({
    secret: "it-is-very-secret",
  })
);

app.get("/auth/page", (c) => {
  console.log(c);
  return c.text("You are authorized");
});

export default app;
