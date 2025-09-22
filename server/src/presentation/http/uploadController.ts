import type { Request, Response } from "express";
import "multer";
import { cloudinary } from "../../infrastructure/cloudinary";

export const uploadController = {
	uploadImage: async (req: Request, res: Response) => {
		try {
			const file = req.file as Express.Multer.File | undefined;
			if (!file) {
				res.status(400).json({ error: "File is required" });
				return;
			}

			const uploadStream = cloudinary.uploader.upload_stream(
				{ folder: "movies-app/uploads" },
				(error, result) => {
					if (error || !result) {
						res.status(500).json({ error: "Upload failed", details: error });
						return;
					}
					res
						.status(200)
						.json({ url: result.secure_url, publicId: result.public_id });
				},
			);

			// Write buffer to the stream
			uploadStream.end(file.buffer);
		} catch (e) {
			res.status(500).json({
				error: "Unexpected error",
				details: e instanceof Error ? e.message : String(e),
			});
		}
	},
};
