import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons"
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState([]);
  const [hideDone, sethideDone] = useState(false);

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        done: false
      },
    ]);
  };

  const toggleHideDone = () => {
    sethideDone(hideDone => !hideDone);
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
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

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <h1>Lista zadań</h1>
      <Header title="Dodaj nowe zadanie" />
      <Form addNewTask={addNewTask} />
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
