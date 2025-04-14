<?php
// Configurações do banco de dados
$host = 'localhost';
$db = 'async';
$user = 'root';
$password = ''; // coloque a senha correta do seu MySQL, se houver

try {
    $pdo = new PDO("mysql:host=$host;db=$db;charset=utf8", $user, $password);

    $stmt = $pdo->prepare("SELECT * FROM formulario");
    $stmt->execute();

    $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retorna os dados em formato JSON
    header('Content-Type: application/json');
    echo json_encode($dados);

} catch (PDOException $e) {
    echo json_encode(['erro' => $e->getMessage()]);
}
?>
