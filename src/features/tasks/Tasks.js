import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { useState } from "react";
import { useTasks } from "../../useTasks";

function Tasks() {
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
        {<TaskList
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
};

export default Tasks;
