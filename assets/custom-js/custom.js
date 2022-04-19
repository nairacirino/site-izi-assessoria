//SCRIPTS GERAIS

// função para substituição de imagens

function trocaLogo(x) {
    var img = document.getElementById(x);
    img.src = './assets/media/img/logo/logo-nav-topo.png';
}

function destrocaLogo(x) {
    var img = document.getElementById(x);
    img.src = './assets/media/img/logo/logo-nav-topo-b.png';
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

// animacao de cta
$(window).on("scroll load", function () {
    var aparecer = 1; // porcentagem (neste caso, é a metade, 50%)
    var eleHeight = $('#ctanimacaowrap').outerHeight(); // altura da div
    var eleTopo = $('#ctanimacaowrap').offset().top; // distancia da div ao topo do documento
    var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
    var distance = eleTopo - scrlTopo; // distancia da div ao topo da janela
    var altJanela = window.innerHeight; // altura da janela

    if (distance <= altJanela - (eleHeight * (aparecer / 100))) {
        addClass('ctanimacao', 'slidectaup')
    } else {
        delClass('ctanimacao', 'slidectaup')
    }
});

// funcoes para adicionar ou remover classes

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


// SCRIPTS DA PÁGINA PROJETOS.HTML

// abrir / fechar projetos

function abrirProjetos(x) {
    delClass(`fechar${x}`, 'd-none');
    delClass(`fechar${x}`, 'text-hidden');
    addClass(`abrirmais${x}esquerda`, 'd-none');
    delClass(`${x}esquerdawrap`, 'div-hidden');
    delClass(`${x}meiowrap`, 'div-hidden');
    delClass(`${x}direitawrap`, 'div-hidden');
}

function fecharProjetos(x) {
    addClass(`${x}esquerdawrap`, 'div-hidden');
    addClass(`${x}meiowrap`, 'div-hidden');
    addClass(`${x}direitawrap`, 'div-hidden');
    addClass(`fechar${x}`, 'd-none');
    delClass(`abrirmais${x}esquerda`, 'd-none');
    addClass(`abrirmais${x}esquerda`, 'text-hidden');
}

// inicia / para slides 

function iniciaSlides(x, y) {
    addClass(`slides${x}${y}`, 'slides');
    delClass(`leiasobre${x}${y}`, 'text-hidden');
}

function paraSlides(x, y) {
    delClass(`slides${x}${y}`, 'slides');
}

// exibir / ocultar textos 

function exibeTextosProjeto(x, y) {
    delClass(`fechatexto${x}${y}`, 'textfhidden');
    delClass(`texto${x}${y}p1`, 'textfhidden');
    delClass(`texto${x}${y}p2`, 'textfhidden');
    delClass(`texto${x}${y}p3`, 'textfhidden');
    addClass(`leiasobre${x}${y}`, 'd-none');
    addClass(`animationwrap${x}${y}`, 'slideup');
    delClass(`animationwrap${x}${y}`, 'd-none');
}

function fechaTextosProjeto(x, y) {
    addClass(`fechatexto${x}${y}`, 'textfhidden');
    addClass(`texto${x}${y}p1`, 'textfhidden');
    addClass(`texto${x}${y}p2`, 'textfhidden');
    addClass(`texto${x}${y}p3`, 'textfhidden');
    delClass(`leiasobre${x}${y}`, 'd-none');
    delClass(`animationwrap${x}${y}`, 'slideup');
    addClass(`animationwrap${x}${y}`, 'd-none');
}

// play / stop autoplay videos

function playVideo(x) {
    var video = document.getElementById(x)
    video.play();
    delClass(x, 'videoslide');
    addClass(x, 'videoslideon')
}

function stopVideo(x) {
    var video = document.getElementById(x)
    video.load();
    delClass(x, 'videoslideon');
    addClass(x, 'videoslide')
}


// SCRIPTS DA PAGINA SERVICOS.HTML

// abre o texto descritivo de serviços

function abreTextoServico(x) {
    delClass(`${x}textoup`, 'div-hidden');
    addClass(`${x}textoup`, 'slideup');
    delClass(`${x}textodown`, 'div-hidden');
}

function reabreTextoServico(x) {
    delClass(`${x}textodown`, 'd-none');
    delClass(`${x}textoup`, 'd-none');
    addClass(`reabre${x}textoup`, 'd-none')
    addClass(`reabre${x}textodown`, 'd-none')
}

function fechaTextoServico(x) {
    addClass(`${x}textoup`, 'd-none');
    delClass(`${x}textoup`, 'slideup');
    addClass(`${x}textodown`, 'd-none');
    delClass(`reabre${x}textoup`, 'd-none')
    delClass(`reabre${x}textodown`, 'd-none')
}