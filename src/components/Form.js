import React from 'react';

const Form = ({ inputText,setInputText,todos,setToDos,setStatus }) =>{
    const handleChange = (e) =>{
        setInputText(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setToDos([
            ...todos,
            {text: inputText, complete: false, id: Math.random()*1000}
        ]);
        setInputText("");
    };
    const handleStatus = (e)=>{
        setStatus(e.target.value);
    };
    return(
        <form>
            <input type="text" className="todo-input" value={inputText} onChange={handleChange} />
            <button onClick={handleSubmit} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onClick={handleStatus} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;