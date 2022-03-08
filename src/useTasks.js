import { useEffect, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        localStorage.getItem("tasks") ?
            JSON.parse(localStorage.getItem("tasks"))
            : []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                content,
                done: false
            },
        ]);
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true
        })));
    }

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                };
            }
            return task;
        }));
    }

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id))
    }

    return { tasks, addNewTask, setAllDone, toggleTaskDone, removeTask }
}