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

dotenv.config();

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

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`),
);
