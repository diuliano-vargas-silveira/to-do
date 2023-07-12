import { useState, ChangeEvent, FormEvent } from "react";

import { iconAdd } from "../../assets";

import "./todo-form.css";

interface Props {
  onSubmit: (toDoValue: string) => void;
}

function ToDoForm({ onSubmit }: Props) {
  const [toDoValue, setToDoValue] = useState("");

  function handleChange(input: ChangeEvent<HTMLInputElement>) {
    setToDoValue(input.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(toDoValue);

    setToDoValue("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        name="toDo"
        value={toDoValue}
        onChange={handleChange}
        required
      />
      <button type="submit">
        Add <img src={iconAdd} alt="plus" />
      </button>
    </form>
  );
}

export default ToDoForm;
