// ==============================
// SCRIPT.JS - CORINTHIANS
// ==============================

// MENU ATIVO
const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(item => item.classList.remove("ativo"));
        link.classList.add("ativo");
    });
});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ANIMAÇÕES NO SCROLL
const elementosAnimados = document.querySelectorAll(".titulo, .texto, .img");

function animarScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 0.85);

    elementosAnimados.forEach(el => {
        if (windowTop > el.offsetTop) {
            el.classList.add("animado");
        }
    });
}

window.addEventListener("scroll", animarScroll);

// BOTÃO VOLTAR AO TOPO
const btnTopo = document.createElement("button");
btnTopo.innerText = "⬆";
btnTopo.id = "btnTopo";
document.body.appendChild(btnTopo);

btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.fontSize = "18px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%";
btnTopo.style.background = "#000";
btnTopo.style.color = "#fff";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
