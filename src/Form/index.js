import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const [fill, setFill] = useState(true);
    const inputRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent) {
            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
            setFill(true);
        } else {
            setFill(false);
        }
        inputRef.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                ref={inputRef}
                type="text"
                fill={fill}
                placeholder="Co jest do zrobienia ?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
}

export default Form;