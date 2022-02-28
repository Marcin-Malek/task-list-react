import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons"
import { useState } from "react";

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


function App() {
  const [hideDone, sethideDone] = useState(false);

  return (
    <>
      <h1>Lista zadań</h1>
      <Header title="Dodaj nowe zadanie" />
      <Form />
      <Header
        title="Lista zadań"
        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDone={hideDone} />}
      />
      <List tasks={tasks} hideDone={hideDone} />
    </>
  );
}

export default App;
