function promSum(arreglo){
    var sum = 0;
    var count = 0;
    for(let x of arreglo){
        sum += x;
        count +=1; 
    }
    console.log("Suma:" + sum + " Promedio:" +(sum/count));
}
