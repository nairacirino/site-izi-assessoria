function pbImg(x) {
    x.style.transition= "2s";
    x.style.filter = "grayscale(100%)";
}

function colorImg(x) {
    x.style.transition= "2s";
    x.style.filter = "grayscale(0%)";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding="0px";
        document.getElementById("logo-expandido").style.padding="0px";
    } else {
        document.getElementById("navbar").style.padding="1.5rem 0 0 0";
        document.getElementById("logo-expandido").style.padding="0 0 1.5rem 0";
    }
    console.log("isso funciona");
    };

    function ctaAparece(x) {
        x.style.display = "block";
    }