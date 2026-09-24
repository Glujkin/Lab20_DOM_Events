
console.log(" Dynamic DOM Element Creation ");

const userList = document.getElementById("userList");
const addUserButton = document.getElementById("addUserButton");
const newUserName = document.getElementById("newUserName");
const stats = document.getElementById("stats");


let userCounter = 0;


addUserButton.addEventListener("click", () => {
    const name = newUserName.value.trim();

    if (name === "") {
        alert("Введите имя пользователя!");
        return;
    }

    userCounter++;

   
    const li = document.createElement("li");
    li.className = "user-item";
    li.dataset.id = userCounter;

    
    const textNode = document.createTextNode(`#${userCounter} — ${name}`);

    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Удалить";

   
    li.appendChild(textNode);
    li.appendChild(deleteBtn);

    
    userList.appendChild(li);

    
    newUserName.value = "";
    newUserName.focus();

    
    updateStats();

    console.log(`Добавлен пользователь: ${name}`);
});


userList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        const userName = listItem.textContent.replace(/Удалить/g, '').trim();

        if (confirm(`Удалить пользователя "${userName}"?`)) {
            listItem.remove();
            updateStats();
            console.log(`Удалён: ${userName}`);
        }
    }
});


function updateStats() {
    const count = userList.children.length;
    stats.textContent = `Всего пользователей: ${count}`;
}


newUserName.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addUserButton.click();
    }
});