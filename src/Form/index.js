import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const [contentPassed, setContentPassed] = useState(true);
    const inputRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent) {
            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
            setContentPassed(true);
        } else {
            setContentPassed(false);
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
                contentPassed={contentPassed}
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