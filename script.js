// script.js - small interactive behaviors

// Typing-like animation for the tagline (simple implementation)
const phrases = ["Cybersecurity Professional | Ethical Hacker | Analyst"];
let idx = 0;
let charIdx = 0;
const speed = 40;
const el = document.getElementById('typed');

function type() {
  if (idx >= phrases.length) idx = 0;
  const text = phrases[idx];
  if (charIdx <= text.length) {
    el.textContent = text.slice(0, charIdx);
    charIdx++;
    setTimeout(type, speed);
  } else {
    setTimeout(()=>{ charIdx = 0; idx++; setTimeout(type, 800); }, 1500);
  }
}
type();

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', ()=>{
  const nav = document.querySelector('.nav-links');
  if (nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
});
