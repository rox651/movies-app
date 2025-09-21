import { Router } from "express";
import multer from "multer";
import { uploadController } from "./uploadController";

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/image", upload.single("file"), uploadController.uploadImage);

export default router;
