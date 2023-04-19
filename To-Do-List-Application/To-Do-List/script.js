let addItemInput = document.getElementById("addItemInput");
let addItemBtn = document.getElementById("addItemBtn");
let itemList = document.getElementById("itemList");
let addFolderInput = document.getElementById("addFolderInput");
let addFolderBtn = document.getElementById("addFolderBtn");
let folderList = document.getElementById("folderList");

let items = [];
let folders = [];

function addItem() {
  let itemText = addItemInput.value;
  if (itemText !== "") {
    let li = document.createElement("li");
    li.textContent = itemText;
    itemList.appendChild(li);
    addItemInput.value = "";
    li.addEventListener("click", function() {
      li.classList.toggle("strike");
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.backgroundColor = "red";
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
      let itemIndex = items.indexOf(itemText);
      items.splice(itemIndex, 1);
      li.remove();
    });
    let strikeThroughbtn = document.createElement("button");
    strikeThroughbtn.textContent = "~";
    strikeThroughbtn.style.backgroundColor = "blue";
    li.appendChild(strikeThroughbtn);
    strikeThroughbtn.addEventListener("click", function() {
      li.style.textDecoration = strikeThroughbtn;
    });
    items.push(itemText);
    
  }
}

function addFolder() {
  let folderName = addFolderInput.value;
  if (folderName !== "") {
    let li = document.createElement("li");
    li.className = "folder";
    let folderInput = document.createElement("input");
    folderInput.type = "text";
    folderInput.className = "folder-input";
    folderInput.value = folderName;
    li.appendChild(folderInput);
    let folderBtn = document.createElement("button");
    folderBtn.textContent = "X";
    folderBtn.className = "folder-btn";
    li.appendChild(folderBtn);
    folderList.appendChild(li);
    addFolderInput.value = "";
    folderBtn.addEventListener("click", function() {
      let folderIndex = folders.indexOf(folderName);
      folders.splice(folderIndex, 1);
      li.remove();
    });
    folderInput.addEventListener("input", function() {
      let folderIndex = folders.indexOf(folderName);
      folders[folderIndex] = folderInput.value;
    });
    folders.push(folderName);
  }
}

addItemBtn.addEventListener("click", addItem);

addFolderBtn.addEventListener("click", addFolder);
