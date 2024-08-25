const pole = document.querySelector(".pole");

let heightPole = 20;
let widthPole = 20;

for(let i = 0; i < heightPole; i++){
    const div = document.createElement("div");
    div.className = "row";
    for(let j = 0; j < widthPole;j++){
        const cell = document.createElement("div");
        cell.className = "cell";
        div.appendChild(cell);
    }
    pole.appendChild(div);
}

/* 
Создаю поле
    Заполняю первую строку {widthPole}
    Перехожу на следующую строку {heightPole}

Процесс заполнения строки ячейками
    Создаю цикл от i = 0 до widthPole
        создаю  в div (pole) -> div (horizontal (является строкой))
        в div (horizontal) создаю div (который является самой ячейкой)
        после выполнения итерации всё по новой
с помощью display flex расположить по вертикали        



*/