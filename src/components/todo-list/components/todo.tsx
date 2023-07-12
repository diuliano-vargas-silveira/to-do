import { Check, Trash } from "@phosphor-icons/react";

import { ToDoInterface } from "../../../App";

interface Props {
  toDo: ToDoInterface;
  onDeleteToDo: (id: string) => void;
  onChangeToDo: (id: string) => void;
}

const DEFAULT_COLOR_ICON = "#808080";
const WHITE_COLOR = "#FFFFFF";

function ToDo({ toDo, onDeleteToDo, onChangeToDo }: Props) {
  const { id, content, finished } = toDo;
  const checkboxClassName = finished ? "checked" : "";

  function handleDelete() {
    onDeleteToDo(id);
  }

  function handleChangeToDo() {
    onChangeToDo(id);
  }

  return (
    <li className={`item ${checkboxClassName}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          value={content}
          checked={finished}
          name={content}
          id="checkbox"
          onChange={handleChangeToDo}
        />
        <Check size={16} color={WHITE_COLOR} className="iconCheck" />
      </label>

      <p>{content}</p>

      <button onClick={handleDelete}>
        <Trash size={16} className="icon" color={DEFAULT_COLOR_ICON} />
      </button>
    </li>
  );
}

export default ToDo;
