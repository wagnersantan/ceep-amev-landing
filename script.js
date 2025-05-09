document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso!");
});

function mostrarCurso(cursoId) {
    // Oculta todos os detalhes primeiro
    const detalhes = document.querySelectorAll('.curso-detalhes');
    detalhes.forEach((detalhe) => {
      detalhe.style.display = 'none';
      detalhe.style.opacity = 0;
    });
  
    // Mostra o detalhe do curso selecionado com uma transição suave
    const cursoSelecionado = document.getElementById(`detalhe-${cursoId}`);
    if (cursoSelecionado) {
      cursoSelecionado.style.display = 'block';
  
      // Adiciona um pequeno delay para permitir a transição
      setTimeout(() => {
        cursoSelecionado.style.transition = 'opacity 0.5s';
        cursoSelecionado.style.opacity = 1;
      }, 10);
    }
  }
  