import "./style.css"

const List = ({ tasks, hideDone }) => (
    <ul className="list">
        {tasks.map(task => (
            !(hideDone && task.done) && (
                <div className="list__container" key={task.id}>
                    <li className={`list__item ${task.done ? " list__item--done" : ""}`}>
                        {task.content}
                    </li>
                    <button className="list__button">
                        {task.done ? "✔" : ""}
                    </button>
                    <button
                        className="list__button list__button--delete">
                    </button>
                </div>
            )
        ))}
    </ul>
)

export default List;