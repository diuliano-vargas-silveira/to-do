import { ToDoInterface } from "../../App";

import "./counter.css";

interface Props {
  toDoList: ToDoInterface[];
}

function Counter({ toDoList }: Props) {
  const amountOfToDos = toDoList.length;

  function renderFinished(): string | number {
    if (amountOfToDos === 0) {
      return amountOfToDos;
    }

    const amountOfFinishedToDos = toDoList.reduce((count, toDo) => {
      if (toDo.finished) {
        return count + 1;
      }

      return count;
    }, 0);

    return `${amountOfFinishedToDos} de ${amountOfToDos}`;
  }

  return (
    <header className="counter">
      <strong className="created">
        Tarefas criadas <span>{amountOfToDos}</span>
      </strong>

      <strong className="finished">
        Concluídas <span>{renderFinished()}</span>
      </strong>
    </header>
  );
}

export default Counter;
