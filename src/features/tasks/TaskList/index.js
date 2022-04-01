import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
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
                        <Button remove onClick={() => removeTask(task.id)}/>
                    </Item>
                )
            ))}
        </List>
    )
};

export default TaskList;