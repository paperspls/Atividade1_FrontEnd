let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

function validarNome() { 
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validarEmail() { 
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.com') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
    }
}

function validarAssunto() { 
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 5) {
        txtAssunto.innerHTML = 'Assunto Inválido'
        txtAssunto.style.color = 'red'
    } else {
        txtAssunto.innerHTML = 'Assunto Válido'
        txtAssunto.style.color = 'green'
    }
}