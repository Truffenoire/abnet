'use client'
import { TaskContext } from "../components/taskContext";
import { useContext } from "react";
import Image from "next/image";


export default function page() {

    const { tasks } = useContext(TaskContext)
    console.log(tasks);

    return (
        <div className="dark:bg-white dark:text-black">
            <div>
                <h1 className="font-bold text-4xl text-center mt-10">Nos réalisation</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2">
                    {tasks.map((task, index) => (
                        // <li className="w-full p-2 my-4" key={task._id}>
                        <li
                            // className={`w-full p-2 my-4 ${index % 2 !== 0 ? 'bg-blue-900 text-white' : ''}`}
                            className={
                                `flex flex-col items-center w-full h-full p-2 my-4 
                                ${index % 2 !== 0 ? 'bg-blue-900 text-white' : ''}
                                ${(index % 4 === 1 || index % 4 === 2) ? 
                                    'md:bg-blue-900 md:text-white' : ''}`
                                }
                            key={task._id}>
                            <div className="self-start text-2xl md:text-3xl m-2 font-bold border-b-2 inline-block mb-4">{task.title}</div>
                            <Image
                                src={`${task.imageUrl}`}
                                width={400}
                                height={400}

                                alt={task.description}
                                className={`${(index % 4 === 1 || index % 4 === 2) ? 'rounded-xl' : ''}`}
                            />
                            <div className="italic text-xl">{task.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}