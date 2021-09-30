import React from 'react'

const Todo = ({ todo, todos, setToDos}) =>{
    const handleDelete = () =>{
        setToDos(todos.filter((el) => el.id !== todo.id));
    };
    const handleComplete = () =>{
        setToDos(todos.map((item) =>{
                if(item.id === todo.id){
                    return{
                        ...item, complete: !item.complete
                    }
                }
                return item;
            })
        );
    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.complete ? "completed" : ""}`}>
                {todo.text}
            </li>
            <button className="complete-btn" onClick={handleComplete}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};
export default Todo;