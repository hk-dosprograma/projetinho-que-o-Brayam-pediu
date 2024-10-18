import { atualizarCartao } from "../services/formacao/cartoes_S.js";

let telaAtt = document.getElementById('telaAtt')
let id;

export function escondeTelaAtt(){
    telaAtt.style.right = '-100vw'
}
export function mostraTelaAtt(i){
    id = i;
    telaAtt.style.right = '0vw'
}
export function recolheDadosAtt(){
    let nome = document.getElementById('nome');
    let img = document.getElementById('img');
    let descricao = document.getElementById('descricao');

    if(nome.value === "", img.value === '', descricao === ''){
        alert('Check se todos os campos estão preenchidos');
    } else {

    console.log(id, nome.value, img.value, descricao.value, );
    atualizarCartao(id, nome.value, img.value, descricao.value, );
    escondeTelaAtt();

    nome.value = '';
    img.value = '';
    descricao.value = '';
}};