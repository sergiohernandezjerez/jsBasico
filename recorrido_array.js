var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 2500},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifono", costo: 1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var articulosFiltrados2 = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articulosFiltrados);
console.log(articulosFiltrados2);
console.log(encuentraArticulo);
console.log(articulosBaratos);