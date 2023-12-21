function divide(dividendo, divisor){
    return new Promise(( resolve, reject) => {
        if(divisor === 0) {
            reject(new Error('No se puede dividir entre 0'));
        }else{
            resolve(dividendo/divisor);
        }
    });
}

try {
    const result = divide(20,7);
    console.log(result);
    const result2 = divide(6,0);
    
} catch(err){
    console.log(err.message);
}