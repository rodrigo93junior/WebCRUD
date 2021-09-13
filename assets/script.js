class Aluno {
    constructor() {
        this.id =0;
        this.nomeAluno ='';
        this.valor =0;
    }
    
    salvar() {
        alert('Adicionando Aluno');
    }
    cancelar() {
        alert('Operação Cancelada!')
    }
}
var aluno = new Aluno();