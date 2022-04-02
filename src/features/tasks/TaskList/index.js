import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectTasksState } from "../tasksSlice";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasksState);
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
                            {task.content}
                        </Content>
                        <Button remove onClick={() => dispatch(removeTask(task.id))}/>
                    </Item>
                )
            ))}
        </List>
    )
};

export default TaskList;