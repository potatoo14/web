import { useState } from "react";
import InputNome from "../components/InputNome";
import InputTelefone from "../components/InputTelefone";

function Formulario(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome) {
      setErroNome("Nome é obrigatório");
      return;
    }
    if (!telefone) {
      setErroTelefone("Telefone é obrigatório");
      return;
    }
    props.onSubmit({ nome, telefone });
    setNome("");
    setTelefone("");
    setErroNome("");
    setErroTelefone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputNome
        valor={nome}
        onChange={(e) => setNome(e.target.value)}
        erro={erroNome}
      />
      <InputTelefone
        valor={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        erro={erroTelefone}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;
