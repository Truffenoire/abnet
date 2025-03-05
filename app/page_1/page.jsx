'use client'
import { TaskContext } from "../components/taskContext";
import { useContext } from "react";


export default function page() {

    const { tasks } = useContext(TaskContext)
    const data = tasks.data;
    return (
        <div>
            <div className="h-[50vh] bg-yellow-200">
                page_1
            </div>
            <div>
                <h1>Liste des tâches</h1>
                <ul>
                    {data.map((task) => (
                        <li key={task._id}>
                            <div>{task.title}</div>
                            <div>{task.description}</div>
                            <div>{task.imageUrl}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}