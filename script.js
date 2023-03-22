
function playInstrument(instrument){
        console.log('Sonando');
        let audioSounds = document.createElement('audio');
        audioSounds.src = instrument;
        audioSounds.play();
}
