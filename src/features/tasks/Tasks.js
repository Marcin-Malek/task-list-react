import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";

const Tasks = () => (
  <>
    <Header title="Lista zadań" />
    <Section
      title="Dodaj nowe zadanie"
      content={<Form />} />
    <Section
      title="Lista zadań"
      content={<TaskList />}
      extraHeaderContent={<Buttons />}
    />
  </>
);

export default Tasks;
