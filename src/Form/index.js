import { useRef, useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        }
        inputRef.current.focus();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                ref={inputRef}
                type="text"
                className="form__input"
                placeholder="Co jest do zrobienia ?"
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <button className="form__button">
                Dodaj zadanie
            </button>
        </form>
    )
}

export default Form;