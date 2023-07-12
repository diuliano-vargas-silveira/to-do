import { useState } from "react";

import Error from "./components/error/error";
import Counter from "./components/counter/counter";
import Header from "./components/header/header";
import ToDoForm from "./components/todo-form/todo-form";
import ToDoList from "./components/todo-list/todo-list";

import "./App.css";

export interface ToDoInterface {
  id: string;
  content: string;
  finished: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDoInterface[]>([]);

  function handleSubmit(value: string) {
    const id = String(crypto.randomUUID());

    const newToDo = {
      id,
      content: value,
      finished: false
    };

    setToDoList([...toDoList, newToDo]);
  }

  function handleChangeToDo(id: string) {
    const newToDoList = toDoList.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, finished: !toDo.finished };
      }
      return toDo;
    });

    setToDoList(newToDoList);
  }

  function handleDeleteToDo(id: string) {
    const newToDoList = toDoList.filter((toDo) => toDo.id !== id);

    setToDoList(newToDoList);
  }

  function showContent() {
    if (toDoList.length > 0) {
      return (
        <ToDoList
          toDoList={toDoList}
          onChangeToDo={handleChangeToDo}
          onDeleteToDo={handleDeleteToDo}
        />
      );
    }
    return <Error />;
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="container">
          <ToDoForm onSubmit={handleSubmit} />

          <Counter toDoList={toDoList} />

          {showContent()}
        </section>
      </main>
    </>
  );
}

export default App;
