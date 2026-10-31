let tg = window.Telegram.WebApp;
if (tg) tg.expand();

// --- သီချင်းသံစနစ် ---
let isSoundOn = false; 
const muteBtn = document.getElementById('mute-btn');
const changeBtn = document.getElementById('change-song-btn');
const bgmAudio = document.getElementById('bgm');
if (bgmAudio) bgmAudio.volume = 0.4;

const playlist = ['bgm.mp3', 'bgm2.mp3']; 
let currentSongIndex = 0;
if (bgmAudio) bgmAudio.src = playlist[currentSongIndex];

if (muteBtn) {
    muteBtn.addEventListener('click', () => {
        isSoundOn = !isSoundOn;
        if (isSoundOn) { muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'; bgmAudio.play().catch(e => console.log(e)); } 
        else { muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'; bgmAudio.pause(); }
        if (tg && tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
    });
}

if (changeBtn) {
    changeBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        bgmAudio.src = playlist[currentSongIndex];
        if (isSoundOn) bgmAudio.play().catch(e => console.log(e));
        if (tg && tg.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
    });
}

// --- စာမျက်နှာ လဲခြင်း (Tab Switching) ---
function switchTab(tabName) {
    // အကုန်ဖျောက်
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-wallet').style.display = 'none';
    document.getElementById('page-item').style.display = 'none';
    
    // Nav အရောင်ပြန်ဖြူ
    document.getElementById('nav-home').classList.remove('active');
    document.getElementById('nav-wallet').classList.remove('active');

    if (tabName === 'home') {
        document.getElementById('page-home').style.display = 'block';
        document.getElementById('nav-home').classList.add('active');
    } else if (tabName === 'wallet') {
        document.getElementById('page-wallet').style.display = 'block';
        document.getElementById('nav-wallet').classList.add('active');
    }
    if (tg && tg.HapticFeedback) tg.HapticFeedback.impactOccurred('light');
}

// --- ပစ္စည်းဝယ်တဲ့ စာမျက်နှာ ဖွင့်ခြင်း ---
function openItem(title, price) {
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-item').style.display = 'block';
    document.getElementById('item-title').innerText = title;
    document.getElementById('item-price').innerText = price + " ကျပ်";
    document.getElementById('bottom-nav').style.display = 'none'; // အောက်ခြေ menu ဖျောက်
}

// --- ငွေဖြည့်ရန် နှိပ်ခြင်း ---
function requestTopup() {
    let amount = document.getElementById('topup-amount').value;
    if(amount < 5000) {
        alert("အနည်းဆုံး 5000 ကျပ် ဖြည့်ရပါမယ်။");
        return;
    }
    // နောက်ပိုင်း ဒီနေရာမှာ Bot ဆီ ဒေတာ ပို့မယ်
    alert(amount + " ကျပ် ဖြည့်ရန် တောင်းဆိုမှု လက်ခံရရှိပါသည်။ (ငွေလွဲပြေစာ တင်ရန် လိုအပ်ပါမည်)");
}

// --- ဝယ်ယူရန် နှိပ်ခြင်း ---
function buyItem() {
    alert("သင့်ရဲ့ မှာယူမှုကို လက်ခံရရှိပါသည်။ Admin မှ စစ်ဆေးပြီး ပစ္စည်းပို့ပေးပါမည်။");
}
