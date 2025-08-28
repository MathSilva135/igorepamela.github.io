// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MODAL DE BOAS-VINDAS ---
    const modalOverlay = document.getElementById('welcome-modal');
    const closeModalButton = document.getElementById('close-modal');

    // Mostra o modal assim que a página carrega
    modalOverlay.classList.add('active');

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
    };

    // Event listeners para fechar o modal
    closeModalButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        // Fecha somente se o clique for no fundo cinza (overlay)
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // --- ATUALIZAR ANO NO RODAPÉ ---
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});