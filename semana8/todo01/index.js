import express from "express";
import cors from "cors";
// import Noty from "noty";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const tasks = [];

app.get("/tasks", (request, response) => {
  response.json({
    total: tasks.length,
    task: tasks,
  });
});

app.post("/create_tasks", (request, response) => {
  //   const Noty = require("noty");
  //   if (request.body.new_task == "") {
  //     return new Noty({
  //       theme: "themeName",
  //       text: "Some notification text",
  //     }).show();
  //   }

  const task = {
    id: tasks.length + 1,
    text: request.body.new_task,
    status: "TODO",
    create_at: new Date(),
  };
  tasks.push(task);
  console.log(request.body.new_task);
});

app.listen(3003, () => {
  console.log("El servidor inicio en el puerto http://localhost:3003/tasks");
});
