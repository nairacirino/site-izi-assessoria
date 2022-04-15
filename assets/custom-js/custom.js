// função substitui imagem
function trocaLogo(x) {
    var img = document.getElementById(x);
    img.src = './assets/media/img/logo/logo-nav-topo.png';
}

function destrocaLogo(x) {
    var img = document.getElementById(x);
    img.src = './assets/media/img/logo/logo-nav-topo-b.png';
}

// substitui texto 

function trocaTexto(x, y) {
    var texto = document.getElementById(x).value;
    console.log(texto);
    texto = y;
    console.log(texto)
    texto.innerHTML;
}


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
    x.style.transition = ".1s";
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

//
$(window).on("scroll load",function(){
	var aparecer = 50; // porcentagem (neste caso, é a metade, 50%)
	var eleHeight = $('#ctanimacao').outerHeight(); // altura da div
	var eleTopo = $('#ctanimacao').offset().top; // distancia da div ao topo do documento
	var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
	var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
	var altJanela = window.innerHeight; // altura da janela

	if(distance <= altJanela-(eleHeight*(aparecer/100))) {
		addClass('ctanimacao', 'slidectaup')
	} else {
        delClass('ctanimacao', 'slidectaup')
    }
});
