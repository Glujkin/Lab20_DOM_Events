
console.log(" DOM Structure ");
console.log(document);


console.log("\nSelecting DOM Elements");


const title = document.getElementById("mainTitle");
console.log("Элемент по ID:", title);


const paragraph = document.querySelector("#mainParagraph");
console.log("Элемент по селектору:", paragraph);


console.log("Текст заголовка:", title.textContent);
console.log("Текст абзаца:", paragraph.textContent);

console.log("\nModifying DOM Content and Styles ");


title.textContent = "Добро пожаловать в мир DOM!";
title.style.color = "#10b981";
title.style.textAlign = "center";


paragraph.style.backgroundColor = "#fef3c7";
paragraph.style.padding = "15px";
paragraph.style.borderRadius = "8px";
paragraph.style.borderLeft = "4px solid #f59e0b";

console.log("Содержимое и стили изменены!");

console.log("\n Click Event Handling ");

const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", () => {
    console.log("Кнопка нажата!");
    clickButton.textContent = " Нажато!";
    clickButton.style.background = "#10b981";
    clickButton.style.transform = "scale(1.05)";
});

console.log("\n Input and Button Interaction");

const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const output = document.getElementById("output");

greetButton.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name !== "") {
        output.textContent = ` Привет, ${name}! Рады видеть тебя!`;
        output.className = "output-text success";
        nameInput.style.borderColor = "#10b981";
    } else {
        output.textContent = " Пожалуйста, введите ваше имя!";
        output.className = "output-text error";
        nameInput.style.borderColor = "#ef4444";
    }
});

console.log("\n Mini Task with DOM Events ");

const clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    nameInput.value = "";
    output.textContent = "";
    output.className = "output-text";
    nameInput.style.borderColor = "#e5e7eb";
    nameInput.focus();
    console.log("Поля очищены");
});

console.log("\n Basic HTML Form Handling ");

const registrationForm = document.getElementById("registrationForm");
const formOutput = document.getElementById("formOutput");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const userName = document.getElementById("userName").value;
    const userAge = document.getElementById("userAge").value;
    const userEmail = document.getElementById("userEmail").value;

    formOutput.textContent = `✅ Форма отправлена!\nИмя: ${userName}\nВозраст: ${userAge}\nEmail: ${userEmail}`;
    formOutput.className = "output-text success";
});


console.log("\n=== ШАГ 9: Form Validation in JavaScript ===");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();
    const userAge = document.getElementById("userAge").value;
    const userEmail = document.getElementById("userEmail").value.trim();

   
    if (userName === "") {
        formOutput.textContent = " Пожалуйста, введите имя!";
        formOutput.className = "output-text error";
        document.getElementById("userName").focus();
        return;
    }

   
    if (userAge === "" || isNaN(userAge) || userAge < 1 || userAge > 120) {
        formOutput.textContent = " Пожалуйста, введите корректный возраст (1-120)!";
        formOutput.className = "output-text error";
        document.getElementById("userAge").focus();
        return;
    }


    if (userEmail === "" || !userEmail.includes("@")) {
        formOutput.textContent = " Пожалуйста, введите корректный email!";
        formOutput.className = "output-text error";
        document.getElementById("userEmail").focus();
        return;
    }


    formOutput.textContent = ` Регистрация успешна!\nДобро пожаловать, ${userName}!`;
    formOutput.className = "output-text success";
    registrationForm.reset();
});