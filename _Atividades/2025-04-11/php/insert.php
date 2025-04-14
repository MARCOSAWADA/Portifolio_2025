<?php
// Configurações do banco
$host = 'localhost';
$dbname = 'async';
$user = 'root';
$pass = ''; // sua senha do MySQL

// Receber dados via POST
$nome     = $_POST['name'] ?? '';
$email    = $_POST['email'] ?? '';
$assunto  = $_POST['subject'] ?? '';
$mensagem = $_POST['message'] ?? '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);

    $stmt = $pdo->prepare("INSERT INTO formulario (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)");
    $stmt->execute([$nome, $email, $assunto, $mensagem]);

    echo json_encode(['status' => 'sucesso']);

} catch (PDOException $e) {
    echo json_encode(['status' => 'erro', 'mensagem' => $e->getMessage()]);
}
?>
