const notaFinal = document.getElementById('select');
const selecionandoUmaNota = document.querySelectorAll('.li');
const botaoSelecionado = selecionandoUmaNota[0];
const notaEscolhida = selecionandoUmaNota[0].innerHTML;
botaoSelecionado.addEventListener('click', () => notaFinal.innerHTML = `<p>You selected ${notaEscolhida} out of 5<p>`)

const botaoSelecionado2 = selecionandoUmaNota[1];
const notaEscolhida2 = selecionandoUmaNota[1].innerHTML;
botaoSelecionado2.addEventListener('click', () => notaFinal.innerHTML = `<p>You selected ${notaEscolhida2} out of 5<p>`)

const botaoSelecionado3 = selecionandoUmaNota[2];
const notaEscolhida3 = selecionandoUmaNota[2].innerHTML;
botaoSelecionado3.addEventListener('click', () => notaFinal.innerHTML = `<p>You selected ${notaEscolhida3} out of 5<p>`)

const botaoSelecionado4 = selecionandoUmaNota[3];
const notaEscolhida4 = selecionandoUmaNota[3].innerHTML;
botaoSelecionado4.addEventListener('click', () => notaFinal.innerHTML = `<p>You selected ${notaEscolhida4} out of 5<p>`)

const botaoSelecionado5 = selecionandoUmaNota[4];
const notaEscolhida5 = selecionandoUmaNota[4].innerHTML;
botaoSelecionado5.addEventListener('click', () => notaFinal.innerHTML = `<p>You selected ${notaEscolhida5} out of 5<p>`)

let selecionadoNota = 1;

function selectNota(ulId) {
    selecionadoNota = ulId;

    let notas = document.getElementsByClassName("li");
    for (let i = 0; i < notas.length; i++) {
        notas[i].classList.remove("botao-ativo");
    }

    let nota = document.getElementById("nota" + ulId);
    nota.classList.add("botao-ativo");
}


const botaoEnviar = document.getElementById('btn-enviar');
const pagina = document.querySelectorAll('.tela')

botaoEnviar.addEventListener('click', () => {
    const paginaUmAberto = document.querySelector('.ativo')
    paginaUmAberto.classList.remove('ativo')

   const paginaDoisAberto = document.getElementById('pagina2')
   paginaDoisAberto.classList.add('ativo')
})
