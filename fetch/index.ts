import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((rsp) => {
    return rsp.data;
  })
  .then((data) => {
    const todo = data as Todo; // JSON.parse(data);
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  ID    : ${id}
  Title : ${title}
  Finish: ${completed}
`);
};
