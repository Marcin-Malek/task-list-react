import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [hideDone, sethideDone] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        content=
        {<List
          tasks={tasks}
          hideDone={hideDone}
          toggleTaskDone={toggleTaskDone}
          removeTask={removeTask}
        />}
        extraHeaderContent=
        {<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
        />}
      />
    </>
  );
}

export default App;
