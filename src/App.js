import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { useState } from "react";
import { useTasks } from "./useTasks";
import { ThemeProvider } from "styled-components";

const theme = {
  breakpoints: {
    mobile: 767
  },
};

function App() {
  const [hideDone, sethideDone] = useState(false);

  const toggleHideDone = () => {
    sethideDone(hideDone => !hideDone);
  }

  const { tasks, addNewTask, setAllDone, toggleTaskDone, removeTask } = useTasks();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default App;
