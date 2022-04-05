import { List, Item, Content, Button, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
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
                        <StyledLink to={`/zadania/${task.id}`}>
                            <Content done={task.done}>
                                {task.content}
                            </Content>
                        </StyledLink>
                        <Button remove onClick={() => dispatch(removeTask(task.id))} />
                    </Item>
                )
            ))}
        </List>
    )
};

export default TaskList;