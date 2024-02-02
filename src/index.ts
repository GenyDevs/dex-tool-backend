import express, { NextFunction } from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { wrappedResponse } from "./utility/functions";
import HotpairsRouter from "./routes/hotpairs";
import DexTradesRouter from "./routes/dextrades";
import NewRouter from "./routes/new";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/hot-pairs", HotpairsRouter);
app.use("/dex-trades", DexTradesRouter );
app.use("/new-func", NewRouter);


app.use("*", (_: Request, res: Response) => {
    console.log("not found")
  return wrappedResponse(res, "Not Found", 404, null);
});

app.use(function onError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  return wrappedResponse(res, err.message, 500, null);
});
const server = app.listen(PORT, async () => {
//   await prisma.$connect();
  console.log("⚡ Server started on port " + PORT);
});

process.on("SIGINT", async () => {
//   await prisma.$disconnect();
//   server.close();
//   console.log("[server]: Server closed on SIGINT");
});
