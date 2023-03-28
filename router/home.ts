import express from "express";
import { verifyJWT } from "../middlewares/verifyJWT";

const router = express.Router();
const JSONbig = require("json-bigint");

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

router.post("/", verifyJWT, async (req, res) => {
    const headers = req.headers;
    console.log(headers);
    try {
        return res.json({ message: "Logado com sucesso!" }).status(200);
    } catch (error) {
        return res.status(500).send(
            JSONbig.stringify({
                message: "Não foi possível criar o usuário!",
            })
        );
    }
});
