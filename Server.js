import Express from "./api/config/express";
import routes from "./api/config/routes";
import bodyParser from "body-parser";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useragent = require("express-useragent");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");

const app = Express();
const PORT = 8080;

// Configurando CORS
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Allowing auth
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  next();
});

const options = {
  inflate: true,
  limit: "100kb",
  type: "*/application",
};

app.use(cors());
app.options("*", cors());
app.set("trust proxy", "loopback, linklocal, uniquelocal");
app.enable("trust proxy");
// Definindo json como padrão de leitura e escrita
app.use(bodyParser.raw(options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(useragent.express());

app.use("/api", routes);

app.listen(PORT, () =>
  console.log(`API listening at http://localhost:${PORT}`)
);
