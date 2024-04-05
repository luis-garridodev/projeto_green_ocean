const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const port = process.env.PORT || "8080";
const host = process.env.HOST || "http://localhost";
app.listen(parseInt(port), () =>
  console.log(`server running in ${host}:${port}`)
);
