<?php get_header(); ?>
    <!--2 hero inicio-->
    <section class="infoblog-hero vh-100 d-flex flex-column justify-content-center position-relative">
        <img class="position-absolute circulo-infoblog d-none d-md-block"
            src="./assets/media/img/Circulo-site-izi-(infoblog).png" alt="">
        <h3 class="margem-padrao">Portal de</h3>
        <h2 class="margem-padrao infoblog-hero-sm">Noticias & Novidades</h2>
    </section>
    <!--fim hero-->

    <!--main inicio-->
    <main class="margem-padrao">
        <!--row inicio-->
        <div class="d-flex flex-wrap flex-md-nowrap">
            <div class="col-md-4 d-flex flex-column justify-content-center">
                <img class="img-fluid" src="./assets/media/img/home/home-socialmedia-centro.webp" alt="">
            </div>
            <div class="col-md-8 ms-5 artigo-texto-sm d-flex flex-column justify-content-between">
                <a href="artigo.html">
                    <h3>Lorem ipsum</h3>
                </a>
                <p class="me-6 mt-4 artigo-texto-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                    optio dolores,
                    exercitationem ipsam
                    voluptas temporibus assumenda rem enim. Voluptates vitae aspernatur soluta cupiditate non quis in
                    qui quas deserunt consequatur.</p>
                <p class="me-6 mt-4 artigo-texto-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                    optio dolores,
                    exercitationem ipsam
                    voluptas temporibus assumenda rem enim. Voluptates vitae aspernatur soluta cupiditate non quis in
                    qui quas deserunt consequatur.</p>
        </div>
        <!--fim row-->
    </main>
    <!--fim main-->

    <section class="cta-contato margem-padrao">
        <!--3 conheca inicio-->
        <div id="ctanimacaowrap" class="d-flex flex-column vh-100">
            <div id="ctanimacao" class="contato-link opacity0 d-flex align-items-center">
                <a href="#">
                    <h3>Você já sabe</h3>
                    <h2 class="infoblog-hero-sm">O que fazemos?</h2>
                </a>
            </div>
        </div>
        <!--fim conheca-->

        <!--4 cta inicio-->
        <div class="contato-link vh-50 d-flex align-items-center justify-content-center flex-column">
            <p id="cta-texto" class="col-md-8 col-lg-5 big-p text-center contato-link-texto"
                onmouseover="ctaAparece(ctalink), addClass('cta-texto', 'pointer')">Juntos vamos entender e estudar
                oportunidades e obstáculos para
                alcançar
                os
                objetivos previstos.</p>
            <div class="col-md-9 text-end">
                <a id="ctalink" class="mt-2 bigger-p text-end" href="#">Bora conversar?</a>
            </div>
        </div>
        <!--cta fim-->
    </section>

    <?php get_footer(); ?>