<script>

/* =========================
   ⏳ CONTADOR
========================= */
const targetDate = new Date("2026-09-01T21:00:00").getTime();

function updateCountdown(){
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff/(1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));
  const s = Math.floor((diff%(1000*60))/1000);

  const el = document.getElementById("contador");

  if(diff > 0){
    el.innerHTML = `⏳ ${d}d ${h}h ${m}m ${s}s`;
  }else{
    el.innerHTML = "🎉 ¡Hoy es el gran día!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();


/* =========================
   📲 WHATSAPP RSVP
========================= */
document.getElementById("wsp").addEventListener("click", () => {
  const phone = "549XXXXXXXXXX"; // CAMBIAR NÚMERO

  const message = `
🎉 Confirmación de asistencia - Mis 18 años

👤 Nombre:
✔ Asistiré: Sí / No
👥 Acompañante:
💬 Mensaje: Confirmo mi asistencia
`;

  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
});


/* =========================
   🎬 INTRO CINEMÁTICO
========================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) {
      intro.classList.add("fade-out");
    }
  }, 3500);
});


/* =========================
   ✨ ANIMACIÓN TIMELINE
========================= */
const events = document.querySelectorAll(".event");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.3
});

events.forEach(e => observer.observe(e));


/* =========================
   🎵 MÚSICA PRO
========================= */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

let isPlaying = false;

window.addEventListener("load", () => {
  setTimeout(() => {
    music.volume = 0.4;

    music.play().then(() => {
      isPlaying = true;
      btn.innerHTML = "🔊 Música ON";
    }).catch(() => {
      btn.innerHTML = "🎵 Tocar música";
    });

  }, 1000);
});

btn.addEventListener("click", () => {
  if(isPlaying){
    music.pause();
    btn.innerHTML = "🔇 Música OFF";
  }else{
    music.play();
    btn.innerHTML = "🔊 Música ON";
  }
  isPlaying = !isPlaying;
});


/* =========================
   🌌 PARTÍCULAS
========================= */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 70; i++){
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if(p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

</script>
