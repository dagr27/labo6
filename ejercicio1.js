function ocu(n, arreglo){
    var count = 0;
    for(let i of arreglo){
        if(n == i){
            count +=1;    
        }
    }
    return count;
}