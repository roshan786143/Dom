//parent node or parent element

let itemList = document.querySelector("#items");
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "green";
console.log(itemList.parentNode.parentNode);
itemList.parentElement.style.color = "red";


//child nodes

console.log(itemList.childNodes);

//lastElementChild

console.log(itemList.lastElementChild);

itemList.lastElementChild.textContent = "hello roshan";

//lastchild

console.log(itemList.lastChild);

//createchild

console.log(itemList.childNodes);

//firstelementchild

console.log(itemList.firstElementChild);

//firstchild

console.log(itemList.firstchild);

//nextsibling

console.log(itemList.nextsibling);

//nextelementsibling

console.log(itemList.nextElementSibling);

//previoussibling

console.log(itemList.previousSibling);

//previouselementsibling

console.log(itemList.previousElementSibling);


//createelement

let newDiv = document.createElement("div");
newDiv.className = "hello";


//setAttribute

newDiv.setAttribute("title","hello roshan");

//createtextnode

let newDivText = document.createTextNode("hello world");

//appendchild

newDiv.appendChild(newDivText);
console.log(newDiv);

//adding HEllo word before Item Lister


let head = document.querySelector("#header-title");

//adding HEllo word before Item 1

let item1 = document.querySelector(".list-group-item");
item1.textContent = "Hello item 1";

