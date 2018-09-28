function suma(arreglo){
    var count = 1;
    var total = arreglo.length;
    while (count < (Math.trunc(total/2)+1)) {
        console.log((arreglo[count-1])+arreglo[total-count]);
        if(total%2!=0 && count == (Math.trunc(total/2) + 1)){
            console.log((arreglo[count])+arreglo[count]);
            break;
        }
        count += 1;
 } 
}
