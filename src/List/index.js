import "./style.css"

const List = ({ tasks, hideDone, toggleTaskDone, removeTask }) => (
    <ul className="list">
        {tasks.map(task => (
            !(hideDone && task.done) && (
                <div className="list__container" key={task.id}>
                    <li className={`list__item ${task.done ? " list__item--done" : ""}`}>
                        {task.content}
                    </li>
                    <button
                        className="list__button"
                        onClick={() => toggleTaskDone(task.id)}>
                            {task.done ? "✔" : ""}
                    </button>
                    <button
                        className="list__button list__button--delete"
                        onClick={() => removeTask(task.id)} />
                </div>
            )
        ))}
    </ul>
)

export default List;