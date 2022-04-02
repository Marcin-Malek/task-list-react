import Form from "./Form";
import Header from "../../common/Header";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Button } from "./styled";
import { fetchExampleTasks, selectFetchPending } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();
  const fetchPending = useSelector(selectFetchPending);
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
        extraHeaderContent={
          <Button
            disabled={fetchPending}
            onClick={() => dispatch(fetchExampleTasks())}
          >
            {fetchPending ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </Button>
        }
      />
      <Section
        title="Lista zadań"
        content={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
};

export default Tasks;
