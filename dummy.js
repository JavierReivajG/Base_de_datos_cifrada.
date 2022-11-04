
var nombre = ["Angel","Javier","Alan","Daniel"]
var edad = ["21","22","21","56"]
var color = ["Aceptable","Aceptable","Esclavo","Aceptable"]
var indice = [nombre, edad, color]



function create() {

}
function update() {
    
}

function read(i,j) {
    var responde;
    switch (j) {
        case 'nombre':
            responde = nombre[i];
            break;
        case 'edad':
            responde =  edad[i];
            break;
        case 'color':
            responde =  color[i];
            break;
        case 'todos':
            responde = nombre[i] + " " + edad[i] + " " + color[i]
            break;
        default:
            console.log("No existe la entidad solicitada, lea bien pendejo");
        }
    return responde
}
function remove() {
    
}


module.exports = {
    read,
    remove,
    update,
    create,
};






