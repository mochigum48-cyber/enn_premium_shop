let tg = window.Telegram.WebApp;
if (tg) tg.expand();

// --- သီချင်းသံစနစ် ---
let isSoundOn = false; 
const muteBtn = document.getElementById('mute-btn');
const bgmAudio = document.getElementById('bgm');

if (bgmAudio) bgmAudio.volume = 0.4;

if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        isSoundOn = !isSoundOn;
        if (isSoundOn) {
            muteBtn.innerText = "🔊";
            bgmAudio.play().catch(e => console.log(e));
        } else {
            muteBtn.innerText = "🔇";
            bgmAudio.pause();
        }
        if (tg && tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
    });
}
