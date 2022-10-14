let second_item = document.querySelector(".list-group-item:nth-child(2)");

second_item.style.backgroundColor = "green";

let second_item = document.querySelector(".list-group-item:nth-child(2)");

second_item.style.display = "hidden";

let second = document.querySelectorAll("li:nth-child(odd)");

second[1].style.fontColor = "blue";

let odd = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
}

//The difference between these two is that querySelector returns a single element matching its selection criteria. querySelectorAll, on the other hand, returns all elements matching the search criteria in an iterable list.
