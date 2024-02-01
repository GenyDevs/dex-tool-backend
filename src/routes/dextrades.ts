import { Router } from "express";
import * as DexTradeController from "../controllers/dex-trades.controller";

const router = Router();

router.get("/", DexTradeController.getDexTrades);

export default router;
