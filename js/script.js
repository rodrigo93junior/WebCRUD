class Aluno {
    constructor() {
        this.id = 1;
        this.arrayAlunos = [];
    }

    salvar() {
        let aluno = this.lerDados();
        if (this.validaCampos(aluno)) {
            alert('salvar')
        }
        console.log(aluno);
    }
    lerDados() {
        let aluno = {};
        
        aluno.id = this.id;
        aluno.nomeAluno = document.getElementById('aluno').value;
        aluno.faculdade = document.getElementById('faculdade').value;

        return aluno;
    }
    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText ='';
        for(let i=0; i < this.arrayAlunos.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_aluno = tr.insertCell();
            let td_faculdade = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayAlunos[i].id;
            td_aluno.innerText = this.arrayAlunos[i].nomeAluno;
            td_faculdade.innerText = this.arrayAlunos[i].faculdade;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'assets/editing.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'assets/detele.png';

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

        }
    }
    adicionar(aluno){
        this.arrayAlunos.push(aluno);
        this.id++;
    }
    validaCampos() {
        let msg = '';
        if (aluno.nomeAluno == '') {
            msg += '- Informe o nome do Aluno \n';
        }
        if (aluno.faculdade == '') {
            msg += '- Informe a Faculdade do Aluno \n';
        }
        if (msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }
    cancelar() {
        alert('Operação Cancelada!')
    }
}
var aluno = new Aluno();