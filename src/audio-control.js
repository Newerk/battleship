

export function audioController() {
    const audioControls = document.createElement('div');
    audioControls.className = 'audio-controls';
    const music = document.createElement('button');
    music.textContent = 'Music 🔇'
    music.addEventListener('click', function playMusic() {
        MusicCollection().titleScreen.play();
        music.removeEventListener('click', playMusic)

    })
    const sfx = document.createElement('button');
    sfx.textContent = 'Sfx 🔇';

    audioControls.append(music, sfx);
    document.body.appendChild(audioControls);

    
}
