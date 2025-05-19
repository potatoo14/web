import "./Input.css";

function InputNome() {
  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" name="nome" required />
    </>
  );
}

export default InputNome;
