import { criarCartoes } from "./../../view/js/cartao_V.js";

export async function pegarCartoes() {
   try {
      const response = await fetch('http://localhost:3000/salario')
      if (response.status === 200) {
         const data = await response.json()
         const cartoes = data.cartoes;

         return cartoes;
      } else {
         alert('Sevice offline...');
         const cartoes = [];
         return cartoes;
      }
   }
   catch (e) {
      alert(e)
   }
}

export async function excluirCartoes(index) {
   try {
      const response = await fetch('http://localhost:3000/salario', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ cartao: index }),
      });
      criarCartoes()
   }
   catch (error) {
      console.error('Erro ao excluir os cartoes', error)
   }
}

export async function cadastrarCartao(nome, img, descricao,) {
   try {
      const response = await fetch('http://localhost:3000/nome', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nome: nome,
            img: img,
            descricao: descricao,
         }),
      });
      criarCartoes()
   }
   catch (e) {
      console.log(e)
   }
}

export async function atualizarCartao(id, nome, img, descricao,) {
   try {
      const response = await fetch('http://localhost:3000/nome', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nome: nome,
            img: img,
            descricao: descricao,
            id: id,
         }),
      })
      criarCartoes();
   } catch (error) {
      console.error('Erro ao atualizar os cartoes', error)
   }
}