<?

# alterar a variavel abaixo colocando o seu email

$destinatario = "nacirino@gmail.com";

$nome = $_REQUEST['nome'];
$assunto = $_REQUEST['nome'];
$email = $_REQUEST['email'];
$telefone = $_REQUEST['telefone'];
$empresa = $_REQUEST['empresa'];
$segmento = $_REQUEST['segmento'];
$mensagem = $_REQUEST['mensagem'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - TESTE COMPROVATIVO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Telefone: " . $telefone . "\n";
$body = $body . "Empresa: " . $empresa . "\n";
$body = $body . "Segmento: " . $segmento . "\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "From: $email\r\n");

?>

