
function sendMessage(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !message) return alert('Please enter name and message.');
  const full = `Hi Zareef, I am ${name}. ${message}`;
  const wa = 'https://wa.me/9633702095?text=' + encodeURIComponent(full);
  window.open(wa, '_blank');
}
