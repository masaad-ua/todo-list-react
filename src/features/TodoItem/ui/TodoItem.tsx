import cls from './TodoItem.module.scss';
import { FaRegTrashAlt } from "react-icons/fa";
import type {TaskI} from "../../../shared/tasksApi";

interface TodoItemProps {
    item: TaskI;
    deleteItem: (value: number) => void,
}

export function TodoItem ( props: TodoItemProps ){
   const {item, deleteItem } = props;

   const deleteHandler = () => {
       deleteItem(item.id);
   }

   return (
        <div className={`${cls.item} flexible space-between`}>
            <p>{item.text}</p>
            <button
                className={`button ${cls.trash_button}`}
                onClick ={deleteHandler}
            >
                <FaRegTrashAlt  className={"fa"}/>
            </button>
        </div>
   )
}

export default TodoItem;

