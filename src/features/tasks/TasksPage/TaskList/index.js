import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { Link } from "react-router-dom";
import { searchQueryParamName } from "../searchQueryParamName";
import { useQueryParameter } from "../QueryParameters";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                !(hideDone && task.done) && (
                    <Item key={task.id}>
                        <Button onClick={() => dispatch(toggleTaskDone(task.id))}>
                            {task.done ? "✔" : ""}
                        </Button>
                        <Content done={task.done}>
                            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                        </Content>
                        <Button remove onClick={() => dispatch(removeTask(task.id))} />
                    </Item>
                )
            ))}
        </List>
    )
};

export default TaskList;