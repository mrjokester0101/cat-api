const express = require("express");
const cors = require("cors");
const path = require("path");
const catRouter = require("./apis/cat");

const app = express();
const PORT = 3000;

app.use(cors());
app.use("/cats", express.static(path.join(__dirname, "public/cats")));
app.use("/api/cat", catRouter);

app.listen(PORT, () => {
  console.log(`Cat API running at http://localhost:${PORT}`);
});
