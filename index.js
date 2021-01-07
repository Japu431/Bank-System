import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionario/gerente.js";
import { Diretor } from "./funcionario/diretor.js";
import { sistemaAutenticacao } from "./sistemaAutenticacao.js";

const diretor = new Diretor("Matheus", 10000, 123456789);
diretor.cadastrarSenha("2004");

const gerente = new Gerente("Lucas", 5000, 1234567899);
gerente.cadastrarSenha("1111");

const cliente = new Cliente("Jorge", 987654321, "123");
const estaLogadoODiretor = sistemaAutenticacao.login(diretor, "2004");
const estaLogadoOGerente = sistemaAutenticacao.login(gerente, "1111");
const clienteEstaLogado = sistemaAutenticacao.login(cliente, "123");

console.log(estaLogadoOGerente, estaLogadoODiretor, clienteEstaLogado);
