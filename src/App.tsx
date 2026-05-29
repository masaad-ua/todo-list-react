import cls from './App.module.scss';
import {useEffect, useState} from "react";
import TodoItem from "./features/TodoItem/ui/TodoItem";
import TodoInput from "./features/TodoInput/ui/TodoInput";
import {createTask, deleteTask, getTasks, type TaskI} from "./shared/tasksApi";

function App() {
    const [items, setItems] = useState<TaskI[]>([]);
    const [value, setValue] = useState("");

    useEffect(() => {
        getTasks()
            .then(setItems)
            .catch(console.error)
    }, []);

    const addItem = async () => {
        if(!value.trim()){
            alert("Please write your todo task");
            return;
        }
        const  newItem: TaskI = await createTask(value);
        setItems([...items, newItem]);
        setValue("");
    }

    const deleteItem = async (id: number) => {
        await deleteTask(id);

        const newItems = items.filter((item: TaskI)=> {
            return item.id !== id
        })
        setItems([ ...newItems])
    }

    return (
        <div className={`${cls.app_container}`}>
            <div className={`${cls.todo_container}`} >
                <h1 className={`${cls.h1_title}`}>Todo App</h1>
                <div className={"flexible column"}>
                    <TodoInput
                        value = {value}
                        onChange = { setValue }
                        addItem = { addItem }
                    />
                    <div className={"flexible column"}>
                        {items.map((item: TaskI) => (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    deleteItem={deleteItem}
                                ></TodoItem>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
