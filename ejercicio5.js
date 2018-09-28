function retornar(tipo, array){
    var aux = [];
    for(let x of array){
        if(typeof x == (tipo)){
            aux.push(x);
        }
    }
    return aux;
}