function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Peugeot", "Partner", 2022);

console.log(autoNuevo.marca);

var autoNuevo2 = new auto("Citroen", "Saxo", 1923);

console.log(autoNuevo2.modelo);