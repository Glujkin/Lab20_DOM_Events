
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