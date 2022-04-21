<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <!--metadados-->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--titulo-->
    <title>Izi Assessoria</title>
    <!--bootstrap css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/bootstrap-5.0.2-dist/css/bootstrap.css">
    <!--font-face css-->
    <link rel="stylesheet" href="./assets/custom-css/fontface.css">
    <!--custom css-->
    <link rel="stylesheet" href="assets/custom-css/custom.css">
    <!--fontawesome icons-->
    <script defer src="https://kit.fontawesome.com/fe3e718820.js" crossorigin="anonymous"></script>
    <!--favicon-->
    <link rel="shortcut icon" href="./assets/media/img/favicon/favicon.ico" type="image/x-icon">
    <link rel="icon" href="./assets/media/img/favicon/favicon.ico" type="image/x-icon">
    <!--google fonts-->

</head>

<body>
    <!--1 barra de navegação inicio -->
    <!--header inicio-->
    <header id="navbar" class="mb-10 mt-5 mt-md-0 d-none d-md-block">
        <!--barra de navegação expandida-->
        <nav>
            <ul class="d-none d-md-flex nav justify-content-around align-items-end">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="servicos.html">Serviços</a></li>
                <li class="nav-item"><a class="nav-link" href="projetos.html">Projetos</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html">
                        <img id="logo-expandido" class="img-fluid logo-topo"
                            src="./assets/media/img/logo/logo-nav-topo-b.png" alt="logo da empresa" onmouseover="trocaLogo('logo-expandido')" onmouseout="destrocaLogo('logo-expandido')">
                    </a></li>
                <li class="nav-item"><a class="nav-link active" href="infoblog.html">Infoblog</a></li>
                <li class="nav-item"><a class="nav-link" href="sobre.html">O que é Izi</a></li>
                <li class="nav-item"><a class="nav-link" href="contato.html">Contato</a></li>
            </ul>
        </nav>
    </header>
    <!--fim barra de navegacao expandida-->
    <!--dropdown inicio-->
    <nav class="">
        <div class="d-flex justify-content-between align-items-center">
            <a class="d-md-none d-lg-none" href="#">
                <img id="logo-dropdown" class="img-fluid logo-topo pb-3"
                    src="./assets/media/img/logo/logo-nav-topo-b.png" alt="logo da empresa" onmouseover="trocaLogo('logo-dropdown')" onmouseout="destrocaLogo('logo-dropdown')">
            </a>
            <div class="dropdown mt-2">
                <a class="btn btn-secondary" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                    aria-expanded="false"><i class="fa-solid fa-bars"></i></a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">

                    <li><a class="dropdown-item" href="index.html">Home</a></li>
                    <li><a class="dropdown-item" href="servicos.html">Serviços</a></li>
                    <li><a class="dropdown-item" href="projetos.html">Projetos</a></li>
                    <li><a class="dropdown-item" href="infoblog.html">Infoblog</a></li>
                    <li><a class="dropdown-item" href="sobre.html">O que é Izi</a></li>
                    <li><a class="dropdown-item" href="contato.html">Contato</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!--dropdown fim-->
    <!--fim barra de navegação-->