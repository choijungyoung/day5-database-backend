import express from "express";
import { createOne, deleteOne, getCounts, getLiked } from "./controller.mjs";

const router = express.Router();

router.get("/:id", getCounts);

router.get("/:id/customer/:customerId", getLiked);

router.post("/", createOne);

router.delete("/:id/customer/:customerId", deleteOne);

export const likeRouter = router;