function CriarUsuario() {
    //CRUD
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let telefone = document.getElementById("telefone").value;
    let faculdade = document.getElementById("faculdade").value;
    let turno = document.getElementById("turno").value;

    let tblUsuarios = document.getElementById("tabelaUsuarios");

    let linha = tblUsuarios.insertRow();

    let campo1 = linha.insertCampo(0);
    let campo2 = linha.insertCampo(1);
    let campo3 = linha.insertCampo(2);
    let campo4 = linha.insertCampo(3);
    let campo5 = linha.insertCampo(4);
    let campo6 = linha.insertCampo(5);
    let campo7 = linha.insertCampo(6);

    campo1.innerHTML = nome;
    campo2.innerHTML = endereco;
    campo3.innerHTML = telefone;
    campo4.innerHTML = faculdade;
    campo5.innerHTML = turno;
    campo6.innerHTML = "<input type='button' class='' value='Editar' onclick='EditarCampo(this)'>"
    campo7.innerHTML = "<input type='button' class='' value='Excluir' onclick='ExcluirCampo(this)'>"
    
    console.log(nome);
    console.log(endereco);
    console.log(telefone);
    console.log(faculdade);
    console.log(turno);
}

var arrayCampo = "";
function EditarCampo(obj) {
    arrayCampo = obj.parentNode.parentNode.childNodes;

    let nome = arrayCampo[0].innerText;
    let endereco = arrayCampo[1].innerText;
    let telefone = arrayCampo[2].innerText;
    let faculdade = arrayCampo[3].innerHTML;
    let turno = arrayCampo[4].innerText;

    document.getElementById("nome").value = nome;
    document.getElementById("endereco").value = endereco;
    document.getElementById("telefone").value = telefone;
    document.getElementById("faculdade").value = faculdade;
    document.getElementById("turno").value = turno;

    document.getElementById("btnCriar").style.display = "none";
    document.getElementById("btnEditar").style.display = "block";
}
function ExcluirCampo() {
    let confirmarExclusao = confirm("Deseja realmente exluir o Usuário?");

    if (confirmarExclusao && obj.parentNode != undefined && obj.parentNode.parentNode != undefined) {
        obj.parentNode.parentNode.remove();
    }
}

function EditarUsuario() {
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let telefone = document.getElementById("telefone").value;
    let faculdade = document.getElementById("faculdade").value;
    let turno = document.getElementById("turno").value;

    arrayCampo[0].innerText = nome;
    arrayCampo[1].innerText = endereco;
    arrayCampo[2].innerText = telefone;
    arrayCampo[3].innerText = faculdade;
    arrayCampo[4].innerText = turno;

    document.getElementById("btnCriar").style.display = "block";
    document.getElementById("btnEditar").style.display = "none";
}