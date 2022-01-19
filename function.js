let array1 = ["abc001", "abc002", "abc003"]
let array1 = ["abc004", "abc001", "abc005"]
//let array2 = ["", "", "", "0992369438", ""]
//let array2 = '{"numero":"", "numero":"", "numero":"0992369777"}'
let array2='{"listaNumeros":["","1598","","","1987"]}'


function listaNumeros (jsonParams){
    let params = JSON.parse(jsonParams);
    let numeros = params.listaNumeros
    for(let i=0; i<numeros.length;i++){
        if(numeros[i]!=""){
            const resp = numeros[i]
            return resp
        }
    }
    return ""
}

let response = listaNumeros(array2)

console.log(response);

function suma(jsonParams) {
    var params = JSON.parse(jsonParams);
    var a = params.param1;
    var b = params.param2;
    var sum = a + b;
    var text = '{ "suma" : '+sum+' }';
    return text;
}