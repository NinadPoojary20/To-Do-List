import React from 'react';
import Todo from './ToDo';

const ToDoList = ({ todos, setToDos, filterTodo }) =>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodo.map(todo =>(
                    <Todo 
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setToDos={setToDos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;