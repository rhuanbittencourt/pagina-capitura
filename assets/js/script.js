
const elementos = document.querySelectorAll('.animar');
      
        function animarAoScroll() {
          elementos.forEach((el) => {
            const posicaoNaTela = el.getBoundingClientRect().top;
            const tamanhoDaTela = window.innerHeight * 0.85;
      
            if (posicaoNaTela < tamanhoDaTela) {
              el.classList.add('ativo');
            }
          });
        }
      
        window.addEventListener('scroll', animarAoScroll);
        window.addEventListener('load', animarAoScroll); // chama ao carregar