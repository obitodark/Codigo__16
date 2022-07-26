import express, { request } from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
const Tasks = [];
app.get("/task", (request, response) => {
  // Tasks.push(task);

  response.json({
    total: Tasks.length,
    tasks: Tasks,
  });
});

app.post("/create_tasks", (request, response) => {
  // Tasks.push(task);

  const task = {
    id: Tasks.length + 1,
    text: request.body.task_text,
    status: "todo",
    created_at: new Date(),
  };

  // const task = request.body;
  // task.created_at = new Date();
  // task.id = todoListArray.length + 1;

  // todoListArray.push(task);

  Tasks.push(task);

  response.json({
    mensaje: task,
  });
});

// app.use(express.json());
app.post("/create_tasks", (request, response) => {});
app.listen(3001, () =>
  console.log("El servidor inicio en el puerto http://localhost:3001")
);
