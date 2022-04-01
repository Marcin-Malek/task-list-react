import { ButtonsContainer, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <ButtonsContainer>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </ButtonsContainer>
        )
    );
};

export default Buttons;