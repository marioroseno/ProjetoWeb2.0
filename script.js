// Validação de resposta de segurança
function validateAnswer() {
    const answer = document.getElementById('security-answer').value;
    const message = document.getElementById('security-message');

    if (answer == '8') {
        message.textContent = 'Resposta correta!';
        message.classList.remove('incorrect');
        message.classList.add('correct');
    } else {
        message.textContent = 'Resposta incorreta. Tente novamente!';
        message.classList.remove('correct');
        message.classList.add('incorrect');
    }
}

// Script para abrir e fechar o menu ao clicar no botão ☰
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});


// Funcionalidade do botão de menu
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('open');
});
