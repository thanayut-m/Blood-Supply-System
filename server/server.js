import express from "express";
import morgan from "morgan";
import cors from "cors";
import { readdirSync } from "fs";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

const routerFile = readdirSync(path.join(__dirname, "routes")).filter((file) =>
  file.endsWith(".js")
);

async function setupRouter() {
  for (const file of routerFile) {
    const routerName = file.replace(".js", "");
    const routerModule = await import(`./routes/${file}`);
    const router = routerModule.router || routerModule.default;
    app.use(`/api/${routerName}`, router);
    console.log(`Loaded router : /api/${routerName}`);
  }
}

await setupRouter();

app.listen(port, () => console.log(`Server is run Port : ${port}`));
