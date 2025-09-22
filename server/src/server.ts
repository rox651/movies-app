import express, { Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mediaRoutes from "./presentation/http/mediaRoutes";
import directorRoutes from "./presentation/http/directorRoutes";
import filmProductionRoutes from "./presentation/http/filmProductionRoutes";
import genreRoutes from "./presentation/http/genreRoutes";
import typeRoutes from "./presentation/http/typeRoutes";
import uploadRoutes from "./presentation/http/uploadRoutes";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./presentation/trpc/routers/_app";
import { createContext } from "./presentation/trpc/context";
import path from "path";
import fs from "fs";

dotenv.config();
const rootEnvPath = path.resolve(process.cwd(), "..", ".env");
if (fs.existsSync(rootEnvPath)) {
	dotenv.config({ path: rootEnvPath });
}

const app = express();
const apiRouter = Router();

const corsOptions = {
	origin: "*",
};

app.use(express.json());
app.use(cors(corsOptions));

apiRouter.use("/media", mediaRoutes);
apiRouter.use("/directors", directorRoutes);
apiRouter.use("/film-productions", filmProductionRoutes);
apiRouter.use("/genres", genreRoutes);
apiRouter.use("/types", typeRoutes);
apiRouter.use("/upload", uploadRoutes);

app.use("/api", apiRouter);

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	}),
);

// Serve frontend build if present
const candidateClientPaths = [
	path.resolve(__dirname, "../../frontend/dist"),
	path.resolve(process.cwd(), "../frontend/dist"),
	path.resolve(process.cwd(), "frontend/dist"),
];
console.log("Frontend dist candidates:", candidateClientPaths);
const clientDistPath = candidateClientPaths.find((p) => fs.existsSync(p));
if (clientDistPath) {
	console.log("Serving frontend from:", clientDistPath);
	app.use(express.static(clientDistPath));
	// Regex fallback: serve index.html for any route that is not /api or /trpc
	app.get(/^(?!\/(api|trpc)(\/|$)).*/, (_req, res) => {
		res.sendFile(path.join(clientDistPath, "index.html"));
	});
} else {
	console.warn(
		"frontend/dist not found. Skipping static frontend. Did the build step run?",
	);
}

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`),
);
