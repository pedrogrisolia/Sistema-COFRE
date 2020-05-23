var GeraSenha = function() {
    this.getRandomChar = function() {
        var ascii = [[48,57],[64,90],[97,122]];
        var i = Math.floor(Math.random()*ascii.length);
        return String.fromCharCode(Math.floor(Math.random()*(ascii[i][1]-ascii[i][0]))+ascii[i][0]);
    }
    this.senha= "";
    for(let i=0;i<6;i++) {
        this.senha += this.getRandomChar()
    }
    return this.senha;
}

console.log(GeraSenha())