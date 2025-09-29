document.addEventListener("DOMContentLoaded", function() {
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


document.addEventListener("DOMContentLoaded", () =>{
    const roletaGirando = document.querySelector('.roletaWidget-girando');
    let indice = 0;

    setInterval(() => {
        indice++;
        if (indice >= roletaGirando.children.length) {
            indice = 0;
        }
        roletaGirando.style.transform = `translateX(-${indice * 100}%)`;
    }, 2500); // muda a imagem a cada 2.5 segundos

}); 

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#inicio, #sobre, #projetos, #contato");
    const navLinks = document.querySelectorAll(".menuItem a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const secaoTop = secao.offsetTop - 150; 
            const secaoHeight = secao.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < secaoTop + secaoHeight) {
                current = secao.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});
