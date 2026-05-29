import cls from './App.module.scss';
import {useEffect, useState} from "react";
import TodoItem from "./features/TodoItem/ui/TodoItem";
import TodoInput from "./features/TodoInput/ui/TodoInput";
import {createTask, deleteTask, getTasks, type TaskI} from "./shared/tasksApi";

function App() {
    const [items, setItems] = useState<TaskI[]>([]);
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const loadTasks = async () => {
            try{
                setLoading(true)
                const tasks = await getTasks();
                setItems(tasks);
            }
            catch (error){
                console.error(error);
            }finally {
                setLoading(false);
            }
        }

        loadTasks();
    }, []);

    const addItem = async () => {
        try {
            setLoading(true);

            if(!value.trim()){
                alert("Please write your todo task");
                return;
            }

            const  newItem: TaskI = await createTask(value);
            setItems([...items, newItem]);
            setValue("");
        } finally {
            setLoading(false);
        }

    }

    const deleteItem = async (id: number) => {
        try {
            setLoading(true);
            await deleteTask(id);

            const newItems = items.filter((item: TaskI)=> {
                return item.id !== id
            })
            setItems([ ...newItems])
        }
        finally {
            setLoading(false);
        }
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
                        {loading && (
                            <div className={`${cls.spinner_container} flexible justify-center`}>
                                <div className={cls.spinner}></div>
                            </div>
                        )}
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
