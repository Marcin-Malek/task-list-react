import "./style.css";

const List = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <ul className="list">
        {tasks.map(task => (
            !(hideDone && task.done) && (
                <li
                    className="list__item"
                    key={task.id}
                >
                    <button
                        className="list__button"
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </button>
                    <span className={`list__content ${task.done ? " list__content--done" : ""}`}>
                        {task.content}
                    </span>
                    <button
                        className="list__button list__button--delete"
                        onClick={() => removeTask(task.id)}
                    />
                </li>
            )
        ))}
    </ul>
);

export default List;