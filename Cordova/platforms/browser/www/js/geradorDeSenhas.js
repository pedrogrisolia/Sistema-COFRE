var geradorDeSenhas = {
    gerarSenha: function() {
        this.senha= "";
        for(let i=0;i<6;i++) {
            this.senha += Math.floor(Math.random()*10)
        }
        alert(`A senha é ${this.senha}`)
        return this.senha;
    }
}
