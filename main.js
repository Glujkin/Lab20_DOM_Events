
console.log(" DOM Structure ");
console.log(document);


console.log("\nSelecting DOM Elements");


const title = document.getElementById("mainTitle");
console.log("Элемент по ID:", title);


const paragraph = document.querySelector("#mainParagraph");
console.log("Элемент по селектору:", paragraph);


console.log("Текст заголовка:", title.textContent);
console.log("Текст абзаца:", paragraph.textContent);