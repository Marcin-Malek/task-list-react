import { List, Item, Content, Button } from "./styled";

const TaskList = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
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
);

export default TaskList;