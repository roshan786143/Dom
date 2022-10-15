let form = document.getElementById("#add form");
let itemList = document.getElementById("#items");
form.addEventListener("Submit",addItem);
itemList.addEventListener("click",removeItem);
function addItem(e){
    e.preventDefault();
    let new_item = document.getElementById("item").value;
    let inputValue = document.getElementById("item").value;
    let description = document.getElementById("description").value;
    let li = document.createElement("li");
    li.className = "list-group-item";
    let newText = document.createTextNode(inputValue);
    let descriptionNode = document.createTextNode(description);
    li.appendChild(document.createTextNode(new_item));
    itemList.appendChild(li);
    let delbtn = document.createElement("button");
    delbtn.className = "btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode("X"));
    li.appendChild(delbtn);
    itemList.appendChild(li);
    function removeItem(e){
        if(e.target.classList.contains("delete")){
            console.log(1);
            if(confirm("Are you sure ?")){
                let li = e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }
}