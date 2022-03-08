import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { useState } from "react";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, sethideDone] = useState(false);

  const toggleHideDone = () => {
    sethideDone(hideDone => !hideDone);
  }
  const { tasks, addNewTask, setAllDone, toggleTaskDone, removeTask } = useTasks();


  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />} />
      <Section
        title="Lista zadań"
        content=
        {<Tasks
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
