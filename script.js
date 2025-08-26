function openModal(id) {
  document.getElementById(id).classList.remove('hidden'); // enlève hidden → modal visible
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden'); // ajoute hidden → modal caché
}

// Fermer en cliquant en dehors
window.onclick = function(event) {
  if(event.target.classList.contains('modal')){
    event.target.classList.add('hidden');
  }
}
