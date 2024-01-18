const textarea = document.getElementById('text');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const text = textarea.value;
    const speaks = new SpeechSynthesisUtterance(text);
    speaks.lang = 'pt-BR';
    window.SpeechSynthesis.speak(speaks);
});