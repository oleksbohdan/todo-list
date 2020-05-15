import React from 'react';
import './App.css';

export default function Tasks(props){
    return(
        <>{
            props.tasks.map(task => (
                <li className="task" key={task.index}>
                    <p>{task.taskName}</p>
                    <button id={task.index} onClick={(event) => props.check(event.target.id)} className="mark-as-done">✓</button>
                    <button id={task.index} onClick={(event) => props.del(event.target.id)} className="delete">✗</button>
                </li>
            ))}

        </>
    );
};


