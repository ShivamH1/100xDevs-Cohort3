import { Hono } from "hono";

const app = new Hono();

const authMiddleware = async (c: any, next: () => Promise<void>) => {
  const header = c.req.header("Authorization");
  if (header !== "Bearer secret") {
    return c.text("Unauthorized", 401);
  }
  await next();
};

app.post("/", authMiddleware, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hello Hono!");
});

export default app;
