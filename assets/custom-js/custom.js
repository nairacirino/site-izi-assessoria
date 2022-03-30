// //função substitui imagem
// function subImagem(x) {
//     document.getElementById(x).src = "./assets/media/img/projetos/fotografia/Projetos-fotografia-ladoesquerda-imagem02.jpg";
// }

// funções para hover preto e branco x colorido //
function pbImg(x) {
    x.style.transition = "2s";
    x.style.filter = "grayscale(100%)";
}

function colorImg(x) {
    x.style.transition = "2s";
    x.style.filter = "grayscale(0%)";
}

// diminuição de margem superior na barra de navegação //

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("logo-expandido").style.padding = "0px";
        document.getElementById("navbar").style.transition = "2s";
        document.getElementById("logo-expandido").style.transition = "2s";
    } else {
        document.getElementById("navbar").style.padding = "1.5rem 0 0 0";
        document.getElementById("logo-expandido").style.padding = "0 0 1.5rem 0";
        document.getElementById("navbar").style.transition = "2s";
        document.getElementById("logo-expandido").style.transition = "2s";
    }
};

// link de cta aparecendo em hover //

function ctaAparece(x) {
    x.style.transition = "2s";
    x.style.opacity = "1";
}

// slideshow imagens em projetos //

function addClass(id, classe) {
    var elemento = document.getElementById(id);
    var classes = elemento.className.split(' ');
    var getIndex = classes.indexOf(classe);

    if (getIndex === -1) {
        classes.push(classe);
        elemento.className = classes.join(' ');
    }
}

function delClass(id, classe) {
    var elemento = document.getElementById(id);
    var classes = elemento.className.split(' ');
    var getIndex = classes.indexOf(classe);

    if (getIndex > -1) {
        classes.splice(getIndex, 1);
    }
    elemento.className = classes.join(' ');
}