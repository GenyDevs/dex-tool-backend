import { Router } from "express";
import * as New from "../controllers/new.controller";

const router = Router();

router.get("/exc", New.ExchangeProtocal);
router.get("/top-earner", New.getTopEarner);
router.get("/top-loser", New.getTopLoser);

export default router;
