import express, { request, response } from "express";

const app = express();
app.get("/", (request, response) => {
  response.json({
    mensaje: "hola",
  });
});
// app.use(express.json());

app.listen(3001, () =>
  console.log("El servidor inicio en el puerto http://localhost:6001")
);
