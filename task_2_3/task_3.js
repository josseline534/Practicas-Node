let input = "nixnix"

function equalShiftsAmount(input) {
    let input2 = new Array()
    let input3 = new Array()
    for (let i = 0; i < input.length; i++) {
        input2.push(input[i]);
        input3.push(input[i]);
    }
    for(let i=0; i<input2.length; i++){
        let a = input2[0]
        let palabra = ""
        for(let j=1; j<=input2.length; j++){
            input2[j-1]=input2[j]
            if(j==input2.length){
                input2[j-1] = a
            }
            palabra = palabra+input2[j-1]
        }
        if(palabra == input){
            return i+1
        }
    }
    return ""
}

let i= equalShiftsAmount(input)
console.log(`La cadena fue desplazada ${i}`);