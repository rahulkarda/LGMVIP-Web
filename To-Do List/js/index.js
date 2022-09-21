function getAndUpdate(){
    console.log("Updating List...");
    let tit = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
        </tr>`; 
    });
    tableBody.innerHTML = str;
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}

function clearStorage(){
    if (confirm("Do you really want to clear? This will clear all the task list.")){
    console.log('Clearing the storage');
    localStorage.clear();
    update()
    }
}