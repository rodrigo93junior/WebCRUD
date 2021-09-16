var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    formData["faculdade"] = document.getElementById("faculdade").value;
    formData["telefone"] = document.getElementById("telefone").value;
    formData["mensalidade"] = document.getElementById("mensalidade").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("tableList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.faculdade;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.telefone;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.mensalidade;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                       <a onClick="onDelete(this)"><i class="fa fa-remove" style="margin-left:5px;color:red"></i></a>`;
}

function resetForm() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("faculdade").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("mensalidade").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = selectedRow.cells[0].innerHTML;
    document.getElementById("faculdade").value = selectedRow.cells[1].innerHTML;
    document.getElementById("telefone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mensalidade").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeCompleto;
    selectedRow.cells[1].innerHTML = formData.faculdade;
    selectedRow.cells[2].innerHTML = formData.telefone;
    selectedRow.cells[3].innerHTML = formData.mensalidade;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja deletar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tableList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nomeCompleto").value == "") {
        isValid = false;
        document.getElementById("validacaoNomeCompleto").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("validacaoNomeCompleto").classList.contains("hide"))
            document.getElementById("validacaoNomeCompleto").classList.add("hide");
    }
    return isValid;
}
