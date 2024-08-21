import { Router } from "express";
import { getdashboardMetrics } from "../controllers/dashboardController";


const router = Router();

router.get("/", getdashboardMetrics);

export default router;