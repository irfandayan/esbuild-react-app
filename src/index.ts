import express from "express";

const app = express();

// console.log("test");
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("listening");
});
