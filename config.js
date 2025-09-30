document.addEventListener("DOMContentLoaded", function() {
    // ===== ABRIR / FECHAR WIDGET =====
    const botoesAbrir = document.querySelectorAll(".abrirWidget");
    const botoesFechar = document.querySelectorAll(".fecharWidget");

    botoesAbrir.forEach(botao => {
        botao.addEventListener("click", function(e) {
            e.preventDefault();
            const sobrePosicao = this.closest(".projetoweb").querySelector(".sobrePosicao");
            sobrePosicao.classList.add("ativo");
        });
    });

    botoesFechar.forEach(botao => {
        botao.addEventListener("click", function() {
            this.closest(".sobrePosicao").classList.remove("ativo");
        });
    });
});

// ===== ROLETA (carrossel para todos os projetos) =====
document.addEventListener("DOMContentLoaded", () => {
    const roletas = document.querySelectorAll(".roletaWidget-girando");

    roletas.forEach(roleta => {
        let indice = 0;

        setInterval(() => {
            indice++;
            if (indice >= roleta.children.length) {
                indice = 0;
            }
            roleta.style.transform = `translateX(-${indice * 100}%)`;
        }, 2500); // muda a imagem a cada 2.5 segundos
    });
});

// ===== SCROLL SPY (menu ativo na barra lateral) =====
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#inicio, #sobre, #projetos, #contato");
    const navLinks = document.querySelectorAll(".menuItem a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        // Garante que "contato" fique ativo ao chegar no rodapé
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            current = "contato";
        }

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});
