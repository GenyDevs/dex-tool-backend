import { Router } from "express";
import * as hotPairs from "../controllers/hot-pairs.controller";
import hotpairService from "../services/hotpair.service";

const router = Router();

router.post("/", hotPairs.getDailyLoserById);
router.get("/", hotPairs.getHotPairs);
router.get("/:id", hotPairs.getDailyLoserById);
router.put("/:id", hotPairs.getDailyLoserById);
router.delete("/:id", hotPairs.getDailyLoserById);
router.post("/exc", hotPairs.ExchangeProtocal);

export default router;
