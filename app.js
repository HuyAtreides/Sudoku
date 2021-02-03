import dotenv from "dotenv";
import express from "express";
import generateBoard from "./Solver_And_Generator/generateBoard.js";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static("./build/"));

app.get("/generate-board/:difficulty", (req, res) => {
  const difficulty = req.params.difficulty;
  res.json(generateBoard(difficulty));
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
