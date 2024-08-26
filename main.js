const pole = document.querySelector(".pole");
const changSizeBtn = document.querySelector("#changeSize");
const clearBtn = document.querySelector("#reset");
const groupBtn = document.querySelector(".btn");

let heightPole = 16;
let widthPole = 16;
let poleSize = 350;

function render(){
    
    //очистка поля
    pole.textContent = "";
    let width = poleSize / widthPole;
    let height = poleSize / heightPole
    //создание поля
    for(let i = 0; i < heightPole; i++){
        const div = document.createElement("div");
        div.className = "row";
        div.style.cssText = `width:${width}px;height:${height}px;`; 
        for(let j = 0; j < widthPole;j++){
            const cell = document.createElement("div");
            cell.className = "cell";
            div.appendChild(cell);
        }
        
        pole.appendChild(div);
    }
}

pole.addEventListener("mousemove",function(e){
    const event = e.target;
    if(event.className === "cell"){
        event.style.cssText = "background-color:red;";
    }
});
groupBtn.addEventListener("click",function(e){
    switch (e.target.id){
        case "changeSize":
            heightPole = prompt("Новое кол-во строк",16) ?? heightPole;
            if(heightPole >= 100){
                const choice = confirm("Запрос превышает 100 - это может негативно сказаться на производительности. Вы согласны?");
                heightPole = choice ? heightPole : 16 
            }
            widthPole = prompt("Новое кол-во столбцов",16) ?? widthPole;
            if(widthPole >= 100){
                const choice = confirm("Запрос превышает 100 - это может негативно сказаться на производительности. Вы согласны?");
                widthPole = choice ? widthPole : 16 
            }
            render();
            return;
        case "reset":
            render();
            return;
    }
    
});

render();
