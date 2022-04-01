import { useSelector } from "react-redux";
import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const { addNewTask, setAllDone, toggleTaskDone, removeTask } = useTasks();

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
          toggleTaskDone={toggleTaskDone}
          removeTask={removeTask}
        />}
        extraHeaderContent=
        {<Buttons
          setAllDone={setAllDone}
        />}
      />
    </>
  );
};

export default Tasks;
