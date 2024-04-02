document.getElementById('botao-comprar').addEventListener('click', function() {
    // Adiciona a classe de animação ao botão
    this.classList.add('botao-clicked');
  
    // Remove a classe de animação após 300 milissegundos
    setTimeout(() => {
      this.classList.remove('botao-clicked');
    }, 300);
  });
  