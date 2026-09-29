const frutas = ["manzana", "platano", "manzana", "naranja", "platano", "manzana"];
const conteoFrutas = {};
let i = 0;

while (i < frutas.length) {
    const fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
    i++;
}

console.log("Cantidad de cada tipo de fruta (con while):");
console.log(conteoFrutas);
