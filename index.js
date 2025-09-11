// Função para tocar o áudio
function tocarAudio(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.play();
  }
}

// Seletores do modal
const modal = document.getElementById("modal");
const abrirMoldal = document.getElementById("abrirMoldal");
const closeModal = document.getElementById("closeModal");

// Abre o modal
abrirMoldal.addEventListener("click", () => {
  modal.showModal();
});

// Fecha o modal
closeModal.addEventListener("click", () => {
  modal.close();
});

