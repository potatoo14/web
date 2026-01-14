import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function unwrap(wrapper) {
  return wrapper
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: "Ocorreu um erro!" };
    });
}

function buscarTodos() {
  return unwrap(axios.get(url));
}

function buscarPorId(id) {
  return unwrap(axios.get(`${url}/${id}`));
}

function adicionar(contato) {
  return unwrap(axios.post(url, contato));
}

function modificar(id, contato) {
  return unwrap(axios.put(`${url}/${id}`, contato));
}

function remover(id) {
  return unwrap(axios.delete(`${url}/${id}`));
}

export { buscarTodos, buscarPorId, adicionar, modificar, remover };
