import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse laboriosam eius vero culpa illum magnam tempore, reiciendis unde, incidunt error, dolorum deserunt minus quibusdam cum nisi odio pariatur itaque? Tempore.",
    done: false
  },
  {
    id: 2,
    content: "This task is done",
    done: true
  }]);

  const [hideDone, sethideDone] = useState(false);

  const toggleHideDone = () => {
    sethideDone(hideDone => !hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
  }

  return (
    <>
      <h1>Lista zadań</h1>
      <Header title="Dodaj nowe zadanie" />
      <Form />
      <Header
        title="Lista zadań"
        extraHeaderContent=
        {<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone} />}
      />
      <List
        tasks={tasks}
        hideDone={hideDone}
        toggleTaskDone={toggleTaskDone}
        removeTask={removeTask} />
    </>
  );
}

export default App;
