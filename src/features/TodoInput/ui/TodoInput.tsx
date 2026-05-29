import cls from "./TodoInput.module.scss";
import { FaPlus } from "react-icons/fa";

interface TodoInput {
    onChange?: (value: string)=> void
    addItem: () => void,
    value: string,
}

export default function TodoInput (props: TodoInput){
    const {
        onChange,
        addItem,
        value
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={`${cls.input_todo_container} flexible space-between`}>
            <input type="text"
                   value={value}
                   id="inputTodo"
                   onChange={onChangeHandler}
                   className={`${cls.input_todo}`}
                   placeholder={"Write your new todo task here"}/>
            <button type="button"
                    className={`${cls.add_todo_task_button} button`}
                    onClick={addItem}
            >
                <FaPlus className={`${cls.fa_todo_list} fa`}/>
            </button>
        </div>
    )
}