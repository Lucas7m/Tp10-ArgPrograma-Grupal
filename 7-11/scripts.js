//7
const pares = (arr) => arr.filter(n => n%2 == 0);
pares([1,2,3,4,5,6,7,8]);


//8
const filterWords = (words) => {
   return words
            .trim()
            .split(" ")
            .filter(word => word[0] == word[0].toUpperCase());
}

filterWords("Santiago Basso es nuestro docente, él Te enseña de una forma bastante peculiar y divertida, por lo que Queremos agradecerle.");

//9
const cambiarPos = (arr) => {
    let x = arr[0];
    arr[0] = arr[1];
    arr[1] = x;

    return arr;
}

cambiarPos([1,3])


//10
let filas = document.querySelectorAll(".fila");

filas.forEach(row => {
    row.addEventListener("click", () => {
        row.classList.add("otherColor")
    })
})


//11
let items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        item.parentNode.removeChild(item)
    })
    
})