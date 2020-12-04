const listar_jogos=document.querySelector('.jogos')
const selecionar=document.querySelector('.selecioinar')
const jogo_escolhido=document.querySelector("#jogo_escolhido")
const btnEscolherJogo=document.querySelector("#btnEscolherJogo")
const nome_adicionar=document.querySelector("#adicionar")
const btnAdicionar=document.querySelector("#btnAdicionar")

//const btnApagar=document.querySelectorAll(".btnApagar")


listar(lista_de_jogos)

function listar(array){
    let lista="";
    for (let jogo of array){
        lista+=`<div id="jogo">
                <div><a href="#" class="btnApagar" onclick="remover_jogo('${jogo.nome}')" ><i class="fas fa-times"></i></a></div>
                <label id="formatação">${jogo.nome}</label>
                </div>`
    }
    listar_jogos.innerHTML=lista
}

function escolher_jogo_aleatorio(array){
    let numero_sorteado=Math.floor(Math.random() * ((array.length+1) - 1)) + 1;
    console.log(array)
    console.log(numero_sorteado)
    let jogo_selecionado="";
    let contador=0;
    for (let jogo of array){
        contador++;
        if (contador==numero_sorteado){
            jogo_selecionado=jogo.nome
            break;
        }
    }
    if (jogo_selecionado==""){
        jogo_escolhido.value="Adicione alguns jogos a lista!"
    }else{
        jogo_escolhido.value=jogo_selecionado;
    }
}

function adicionar_jogo(jogo){
    if (jogo=='' || jogo=="Jogo inválido!"){
        nome_adicionar.value="Jogo inválido!"
    }
    else{
    let novo_jogo={nome:jogo}
    lista_de_jogos.push(novo_jogo);
    nome_adicionar.value="";
    }
}

btnEscolherJogo.addEventListener('click',function(){
    escolher_jogo_aleatorio(lista_de_jogos)

})

btnAdicionar.addEventListener('click',function(){
    adicionar_jogo(nome_adicionar.value)
    listar(lista_de_jogos)
    
})



function remover_jogo(nome){
    let novo_array = lista_de_jogos.filter(value=>value.nome!=nome)
    lista_de_jogos=novo_array;
    listar(lista_de_jogos)
}

nome_adicionar.addEventListener('click',function(){
    nome_adicionar.value='';
})