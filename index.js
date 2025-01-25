const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/cats", express.static(path.join(__dirname, "public/cats")));
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
