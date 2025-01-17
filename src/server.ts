import express from "express";
import { signinRoutes, registerRoutes, homeRoutes } from "./routes";
import { verifyJWT } from "../middlewares/verifyJWT";
import { getPort } from "../functions/port";

import cors from "cors";

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.listen(getPort(), () =>
    console.log(`Server is running in port ${getPort()}!`)
);

app.use("/signup", registerRoutes);

app.use("/signin", signinRoutes);

app.use("/home", verifyJWT, homeRoutes);
