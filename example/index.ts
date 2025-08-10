import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { exampleScreen } from "./src/example_screen";

const app = express();

app.use(bodyParser.json())

const router = express.Router();

router.get("/example_screen", (req, res) => {
    console.log("req");
    const view = exampleScreen();
    res.send(view);
});

router.get("/lol", (req, res) => {
    res.json({
        "type": "Column",
        "id": "1",
        "controlled": false,
        "children": [
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
            {
                "type": "Fragment",
                "tag": "f1",
                "id": "1",
            },
        ],
    });
});

app.use(router);

const server = http.createServer(app);

server.listen(8999, () => console.log("Server started"))
