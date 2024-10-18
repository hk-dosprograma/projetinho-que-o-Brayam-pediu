import { cadastrarCartao } from "../services/formacao/cartoes_S.js"

let telaCad = document.getElementById('telaCadastro')

export function escondeTelaCad() {
    telaCad.style.left = '-100vw'
}

export function mostraTelaCad() {
    telaCad.style.left = '0vw'
}

export function recolheDados() {
    let nome = document.getElementById('nomeCad');
    let img = document.getElementById('imgCad');
    let descricao = document.getElementById('descricaoCad');

    if(nome.value === "", img.value === '', descricao === ''){
        alert('Check se todos os campos estão preenchidos');
    } else {


        cadastrarCartao(nome.value, img.value, descricao.value,);
        escondeTelaCad();

        nome.value = '';
        img.value = '';
        descricao.value = '';
    }
}