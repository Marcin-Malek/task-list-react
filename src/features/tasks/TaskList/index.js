import { List, Item, Content, Button } from "./styled";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ toggleTaskDone, removeTask }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    return (
        <List>
            {tasks.map(task => (
                !(hideDone && task.done) && (
                    <Item key={task.id}>
                        <Button onClick={() => toggleTaskDone(task.id)}>
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