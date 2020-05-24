var Whatsapp = {
    geraMensagem: function() {
        var numero=document.getElementById('numero').value.toString();
        var mensagem=geradorDeSenhas.gerarSenha()
        var link = 'https://api.whatsapp.com/send?phone='+numero+'&text=A%20sua%20senha%20é%20'+mensagem
        window.open(link)
        
    }

}