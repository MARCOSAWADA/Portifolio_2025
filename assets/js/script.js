let formulario = document.getElementById("formulario");
console.log(formulario);


let botao = document.getElementById("botao");
console.log(botao);

botao.addEventListener("click", function(event){
    event.preventDefault();
    // alert("CLICOU");
    console.log("Clicou");
    
    // _____________________________________________

    chamaModal();





    // ____________APARECE UM ALERT AO APERTAR OO BOTÃO OK DE DENTRO DA JANELA DE ALERT DO ENVIAR MENSAGEM_________________________________

    let bot_cadastrar = document.getElementById("cadastrar2");
    // bot_cadastrar.addEventListener('click', function(){
    //     alert("CADASTRADO COM SUCESSO !!!!!");
    // })

    // _________COM CRUDPHP_______MOSTRAR O QUE ESTA DENTRO DE PHP/api.php____________________
    bot_cadastrar.addEventListener('click', async function(){

        const response = await fetch('./php/api.php');
        const data = await response.json();
        console.log(data);

    })






    // ___________APARECE NO CONSOLE ASSIM QUE APERTA NO BOTÃO DE ENVIAR MENSAGEM__________________________________

    event.preventDefault();

    let nome = formulario.name.value;
    let email = formulario.email.value;
    let assunto = formulario.assunto.value;
    let mensagem = formulario.mensagem.value;

    console.log(nome);
    console.log(email);
    console.log(assunto);
    console.log(mensagem);

})


// let modal = document.getElementById("modal");
// console.log(modal);

const modal = document.getElementById("modal");

function chamaModal(){
    modal.classList.remove("oculta");
    modal.classList.add("chama");
}