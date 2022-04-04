import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const params = useParams();
    const task = useSelector(state => getTaskById(state, params.id))

    return (
        <>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania!"}
                content={
                    <>
                        <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                    </>
                }
            />
        </>
    );
};

export default TaskPage;