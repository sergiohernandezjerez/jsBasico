var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

frutas.forEach(element => {
    console.log(element);
});

console.log(frutas.length);

frutas.push("Uvas");  //añade al final

frutas.pop("Uvas");  //elimina del final

frutas.unshift("Uvas");  //añade al inicio

frutas.shift("Uvas");  //elimina del inicio\

frutas.indexOf("Cereza");