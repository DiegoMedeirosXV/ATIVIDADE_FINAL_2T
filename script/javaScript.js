function enviarForm() {

    let nome = document.getElementById('nome').value;
    

    let email = document.getElementById('email').value;
    
    let data = document.getElementById('aniversario').value;

    let senha = document.getElementById('senha').value;

    let confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha.length === 0 || confirmaSenha.length === 0) {
        document.getElementById('senha').classList.add('borda-erro');
        
    }  else{
         if (senha === confirmaSenha) {
    }   else{
        alert('SENHAS INCORRETAS')
    }
    }

//radios 
    let opcoes = document.getElementsByName('opcao');
    let opcao = null;

    console.log(opcoes);

    opcoes.forEach(element => {
        if (element.checked) {
            opcao = element.value
        }
    })
 console.log(opcao);

// checkboxes

let intereses = [];
let checkboxes = document.getElementsByName('modalidade')

checkboxes.forEach(element => {
    if (element.checked) {
        intereses.push(element.value)
    }

    console.log(intereses)
})








// CRIANDO OBJETO PARA ENVIAR PARA O BACK-END

let objetoEnvio = {};

objetoEnvio.nome = nome;
objetoEnvio.email = email;
objetoEnvio.data = data;
objetoEnvio.opcoes = opcao;
objetoEnvio.modalidade = intereses;


console.log(objetoEnvio);

}