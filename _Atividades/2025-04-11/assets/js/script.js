document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('formulario');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      const formData = new FormData(form);
  
      fetch('php/insert.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(resultado => {
        if (resultado.status === 'sucesso') {
          console.log('Formulário enviado com sucesso!');

          document.getElementById('modal').classList.remove('oculta');
        } else {
          console.error('Erro ao enviar:', resultado.mensagem);
          alert('Erro ao enviar: ' + resultado.mensagem);
        }
      })
      .catch(erro => {
        console.error('Erro na requisição:', erro);
      });
    });
  

    document.getElementById('cadastrar2').addEventListener('click', () => {
      document.getElementById('modal').classList.add('oculta');
      form.reset(); 
    });
  
  });
  