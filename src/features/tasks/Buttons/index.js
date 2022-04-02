import { ButtonsContainer, Button } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import {
    toggleHideDone,
    setAllDone,
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const tasksEmpty = useSelector(selectAreTasksEmpty);
    const everyTaskDone = useSelector(selectIsEveryTaskDone);
    const dispatch = useDispatch();
    return (
        tasksEmpty || (
            <ButtonsContainer>
                <Button onClick={() => dispatch(toggleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={everyTaskDone}
                    onClick={() => dispatch(setAllDone())}
                >
                    Ukończ wszystkie
                </Button>
            </ButtonsContainer>
        )
    );
};

export default Buttons;