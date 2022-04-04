import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const [contentPassed, setContentPassed] = useState(true);
    const inputRef = useRef();

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent) {
            dispatch(addTask({
                content: trimmedNewTaskContent,
                done: false,
                id: nanoid(),
            }));
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
                autoFocus
            />
            <Button>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;