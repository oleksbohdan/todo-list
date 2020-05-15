import React from 'react';
import Tasks from './Tasks'
import './App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            tasks: [],
            done: []
        };
        this.handleSave = this.handleSave.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSave(){
        const input = document.getElementById('entered-task');
        if (!input.value) return;
        let task = {
            taskName: input.value,
            index: this.state.total
        };
        this.setState({total: this.state.total + 1, tasks: [...this.state.tasks, ...[task]]});
        input.value = '';
    }

    handleDelete = id => {
        const arr = [...this.state.tasks];
        let taskIndex = 0;
        arr.forEach((task, index) => {
            if(task.index === Number(id)) taskIndex = index;
        });
        arr.splice(taskIndex, 1);
        this.setState({tasks: arr})

    };

    handleCheck = id => {
        const arr = [...this.state.tasks];
        let taskIndex = 0;
        arr.forEach((task, index) => {
            if(task.index === Number(id)) taskIndex = index;
        });
        const done = arr.splice(taskIndex,1);
        done.index = this.state.total + 1;
        this.setState({total: this.state.total + 1, tasks: arr, done: [...this.state.done, ...done]})
    };


    render() {
        return (
            <div className="App">
                <div className="todo-list">
                    {this.state.done.length ?
                        <>
                            <h1 className="todo-heading">Already done</h1>
                            <ul className="tasks">
                                {this.state.done.map(doneTask => (
                                    <li className="task" key={doneTask.index}>{doneTask.taskName}</li>
                                ))}
                            </ul>
                        </>
                        : null}
                    <h1 className="todo-heading">To do</h1>
                    <ul className="tasks">
                        <Tasks tasks= {this.state.tasks}
                               check = {this.handleCheck.bind(this)}
                               del = {this.handleDelete.bind(this)}/>
                    </ul>
                    <div className="separator"/>
                    <div className="input-field">
                        <p className="task">Task</p>
                        <input id="entered-task" type="text" placeholder="What do you need to do?"/>
                    </div>
                    <button onClick={this.handleSave}>Save item</button>
                </div>
            </div>
        )
    }
}

export default App;