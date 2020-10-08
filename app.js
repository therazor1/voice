const btnStartRecord = document.querySelector("#btnStartRecord");
const btnStopRecord = document.querySelector("#btnStopRecord");
const texto = document.querySelector("#texto");


let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event)=>{
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
}

btnStartRecord.addEventListener('click', ()=>{
    recognition.start();
});

btnStopRecord.addEventListener('click', ()=>{
    recognition.abort();
})
