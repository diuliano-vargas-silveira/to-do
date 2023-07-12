import { ToDoInterface } from "../../App";
import ToDo from "./components/todo";

import "./todo-list.css";

interface Props {
  toDoList: ToDoInterface[];
  onChangeToDo: (id: string) => void;
  onDeleteToDo: (id: string) => void;
}

function ToDoList({ toDoList, onChangeToDo, onDeleteToDo }: Props) {
  return (
    <ul className="list">
      {toDoList.map((toDo) => (
        <ToDo
          key={toDo.id}
          toDo={toDo}
          onChangeToDo={onChangeToDo}
          onDeleteToDo={onDeleteToDo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
