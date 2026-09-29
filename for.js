const frutas = ["manzana", "platano", "manzana", "naranja", "platano", "manzana"];
const conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}

console.log("Cantidad de cada tipo de fruta:");
console.log(conteoFrutas);
