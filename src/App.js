import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons"

const tasks = [{
  id: 1,
  content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse laboriosam eius vero culpa illum magnam tempore, reiciendis unde, incidunt error, dolorum deserunt minus quibusdam cum nisi odio pariatur itaque? Tempore.",
  done: false
},
{
  id: 2,
  content: "This task is done",
  done: true
}]

const hideDoneTasks = false;

function App() {
  return (
    <>
      <h1>Lista zadań</h1>
      <Header title="Dodaj nowe zadanie" />
      <Form />
      <Header
        title="Lista zadań"
        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks} />}
      />
      <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </>
  );
}

export default App;
