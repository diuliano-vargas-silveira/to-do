import { iconEmptyList } from "../../assets";

import "./error.css";

function Error() {
  return (
    <section className="error">
      <img src={iconEmptyList} alt="Empty spreadsheet" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </section>
  );
}

export default Error;
