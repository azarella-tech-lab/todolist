import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import ToDoLlist from "./ToDoLlist.jsx";

const ToDo = () => {
    return (
        <div className="todo">

            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <ToDoInfo />
            <ToDoLlist />
        </div>
    )
}

export default ToDo