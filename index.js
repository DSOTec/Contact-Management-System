
function addData(){

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let mobile = document.getElementById("numberInput").value;
    let address = document.getElementById("addressInput").value;

    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = email;
    newRow.insertCell(2).innerHTML = mobile;
    newRow.insertCell(3).innerHTML = address;
    newRow.insertCell(4).innerHTML = '<button onclick="editData(this)">Edit</button>' +
     '<button onclick="deleteData(this)">Delete</button>';

    clearInput();
}

function editData(button){

    let row = button.parentNode.parentNode;

    let nameCell    =  row.cells[0];
    let emailCell   =  row.cells[1];
    let mobileCell  = row.cells[2];
    let addressCell = row.cells[3];

    let nameInput = prompt("Enter the updated name:", nameCell.innerHTML);
    let emailInput = prompt("Enter the updated email:", emailCell.innerHTML);
    let mobileInput = prompt("Enter the updated mobile:", mobileCell.innerHTML);
    let addressInput = prompt("Enter the updated city:", addressCell.innerHTML);

    nameCell.innerHTML =    nameInput;
    emailCell.innerHTML =   emailInput;
    mobileCell.innerHTML =  mobileInput;
    addressCell.innerHTML = addressInput;
}

function deleteData(button){
    
    let row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);
}

function clearInput(){
            document.getElementById("nameInput").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("numberInput").value = "";
            document.getElementById("addressInput").value = "";
}