const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Date",
      "Origin",
      "Accept",
      "Cookie",
      "Set-Cookie",
      "X-XSRF-TOKEN",
      "Accept-Language",
    ],
  })
);
app.use(routes);
export default app;
