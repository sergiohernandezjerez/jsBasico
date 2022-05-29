var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

while(estudiantes.length > 0){
    console.log(estudiantes.length);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}