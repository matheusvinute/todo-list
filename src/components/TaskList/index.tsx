import { useState } from 'react';

import { FcRules, FcFullTrash } from 'react-icons/fc';

import { Container } from "./styles";

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TaskList(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCreateNewTask(){
        if(!newTaskTitle) return;

        const newtask = {
            id: Math.random(),
            title: newTaskTitle,
            isComplete: false
        }

        setTasks(oldtask => ([...oldtask, newtask]))

        setNewTaskTitle('');
    }

    function handleToggleTaskCompletion(id: number){
        const checkTask = tasks.map(task => task.id === id ? {
            ...task,
            isComplete: !task.isComplete
        }: task)

        setTasks(checkTask);
    }

    function handleRemoveTask(id: number){
        const deleteTask = tasks.filter(task => task.id !== id);

        setTasks(deleteTask);
    }

    return(
        <Container>
            <header>
                <h2>Minhas Tarefas</h2>

                <div>
                    <input 
                        type="text"
                        placeholder="task"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                    <button 
                        type="submit"
                        onClick={handleCreateNewTask}
                    >
                        <FcRules fontSize={16} />
                    </button>
                </div>
            </header>
            <main>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <div className={task.isComplete ? 'completed' : ''} data-testid="task">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        readOnly
                                        checked={task.isComplete}
                                        onClick={() => handleToggleTaskCompletion(task.id)}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                <p>{task.title}</p>
                            </div>

                            <button 
                                type="button"
                                data-testid="remove-task-button" 
                                onClick={() => handleRemoveTask(task.id)}
                            >
                                <FcFullTrash size={20} />
                            </button>
                        </li>
                    ))}
                </ul>
            </main>
        </Container>
    )
}
